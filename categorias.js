const { connect } = require("./db");
const Logger = require("./logger"); 

module.exports = class Categoria {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("categorias").insertOne({
                nome: this.nome,
                cor: this.cor
            });
            console.log("Categoria inserida:", result.insertedId);
            client.close();
        } catch (error) {
            Logger.log("Erro ao inserir categoria: " + error);
            console.log("Erro ao inserir categoria:", error); 
        }
    }

    static async atualizar(filtro, novosDados) {
        try {
            const { db, client } = await connect(); 
            const result = await db.collection("categorias").updateMany(filtro, { 
                $set: novosDados, 
            });
            console.log("Categorias atualizadas:", result.modifiedCount); 
            client.close(); 
        } catch (error) {
            Logger.log("Erro ao atualizar categorias: " + error); 
            console.error("Erro ao atualizar categorias:", error); 
        }
    }

    static async buscar(filtro = {}) {
        try {
            const { db, client } = await connect(); 
            const categorias = await db.collection("categorias").find(filtro).toArray(); 
            console.log("Categorias encontradas:", categorias);
            client.close(); 
            return categorias; 
        } catch (error) {
            Logger.log("Erro ao buscar categorias: " + error); 
            console.error("Erro ao buscar categorias:", error);
            return []; 
        }
    }

    static async deletar(filtro) {
        try {
            const { db, client } = await connect();
            const result = await db.collection("categorias").deleteMany(filtro);
            console.log("Categorias deletadas:", result.deletedCount);
            client.close(); 
        } catch (error) {
            Logger.log("Erro ao deletar categorias: " + error); 
            console.error("Erro ao deletar categorias:", error); 
        }
    }
};