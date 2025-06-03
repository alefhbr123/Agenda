const { connect } = require("./db");
const Logger = require("./logger");

module.exports = class Evento {
    constructor(
        titulo,
        descricao,
        data,
        horaInicio,
        horaFim,
        local,
        categoriaId,
        usuarioId,
        convidados = []
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date(data);
        this.horaInicio = horaInicio;
        this.horaFim = horaFim;
        this.local = local;
        this.categoriaId = categoriaId;
        this.usuarioId = usuarioId;
        this.convidados = convidados;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("eventos").insertOne({
                titulo: this.titulo,
                descricao: this.descricao,
                data: this.data.toISOString(),
                hora_inicio: this.horaInicio,
                hora_fim: this.horaFim,
                local: this.local,
                categoria_id: this.categoriaId,
                usuario_id: this.usuarioId,
                convidados: this.convidados
            });
            console.log("Evento inserido:", result.insertedId);
            client.close();
        } catch (error) {
            Logger.log("Erro ao inserir evento: " + error);
            console.log("Erro ao inserir evento:", error); 
        }
    }

    
    static async atualizar(filtro, novosDados) { 
        try {
            const { db, client } = await connect(); 
            const result = await db.collection("eventos").updateMany(filtro, { 
                $set: novosDados, 
            });
            console.log("Eventos atualizados:", result.modifiedCount); 
            client.close(); 
        } catch (error) {
            Logger.log("Erro ao atualizar eventos: " + error); 
            console.error("Erro ao atualizar eventos:", error); 
        }
    }

    static async buscar(filtro = {}) { 
        try {
            const { db, client } = await connect(); 
            const eventos = await db.collection("eventos").find(filtro).toArray();
            console.log("Eventos encontrados:", eventos); 
            client.close(); 
            return eventos; 
        } catch (error) {
            Logger.log("Erro ao buscar eventos: " + error); 
            console.error("Erro ao buscar eventos:", error); 
            return []; 
        }
    }

    static async deletar(filtro) {
        try {
            const { db, client } = await connect(); 
            const result = await db.collection("eventos").deleteMany(filtro);
            console.log("Eventos deletados:", result.deletedCount); 
            client.close(); 
        } catch (error) {
            Logger.log("Erro ao deletar eventos: " + error); 
            console.error("Erro ao deletar eventos:", error); 
        }
    }
};