// Convidado.js
const { connect } = require("./db");
const Logger = require("./logger"); 

module.exports = class Convidado {
    constructor(evento_id, nome, email, status) {
        this.evento_id = evento_id;
        this.nome = nome;
        this.email = email;
        this.status = status;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("convidados").insertOne({
                evento_id: this.evento_id,
                nome: this.nome,
                email: this.email,
                status: this.status
            });
            console.log("Convidado inserido:", result.insertedId);
            client.close();
        } catch (error) {
            Logger.log("Erro ao inserir convidado: " + error);
            console.log("Erro ao inserir convidado:", error); 
        }
    }

    static async atualizar(filtro, novosDados) {
        try {
            const { db, client } = await connect();
            const result = await db.collection("convidados").updateMany(filtro, {
                $set: novosDados,
            });
            console.log("Convidados atualizados:", result.modifiedCount);
            client.close();
        } catch (error) {
            Logger.log("Erro ao atualizar convidados: " + error);
            console.error("Erro ao atualizar convidados:", error);
        }
    }

    static async buscar(filtro = {}) {
        try {
            const { db, client } = await connect();
            const convidados = await db.collection("convidados").find(filtro).toArray();
            console.log("Convidados encontrados:", convidados);
            client.close();
            return convidados; 
        } catch (error) {
            Logger.log("Erro ao buscar convidados: " + error);
            console.error("Erro ao buscar convidados:", error); 
            return []; 
        }
    }

    static async deletar(filtro) {
        try {
            const { db, client } = await connect();
            const result = await db.collection("convidados").deleteMany(filtro);
            console.log("Convidados deletados:", result.deletedCount);
            client.close();
        } catch (error) {
            Logger.log("Erro ao deletar convidados: " + error);
            console.error("Erro ao deletar convidados:", error); 
        }
    }
};