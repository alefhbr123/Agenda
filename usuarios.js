// Usuario.js
const { connect } = require("./db");
const Logger = require("./logger"); 

module.exports = class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("usuarios").insertOne({
                nome: this.nome,
                email: this.email,
                senha_hash: this.senha
            });
            console.log("Usuário inserido:", result.insertedId);
            client.close();
        } catch (error) {
            Logger.log("Erro ao inserir usuário: " + error); 
            console.log("Erro ao inserir usuário:", error); 
        }
    }

    static async atualizar(filtro, novosDados) { 
        try {
            const { db, client } = await connect();
            const result = await db.collection("usuarios").updateMany(filtro, { 
                $set: novosDados, 
            });
            console.log("Usuários atualizados:", result.modifiedCount);
            client.close(); 
        } catch (error) {
            Logger.log("Erro ao atualizar usuários: " + error); 
            console.error("Erro ao atualizar usuários:", error);
        }
    }

    static async buscar(filtro = {}) { 
        try {
            const { db, client } = await connect();
            const usuarios = await db.collection("usuarios").find(filtro).toArray();
            console.log("Usuários encontrados:", usuarios); 
            client.close(); 
            return usuarios; 
        } catch (error) {
            Logger.log("Erro ao buscar usuários: " + error); 
            console.error("Erro ao buscar usuários:", error); 
            return []; 
        }
    }


    static async deletar(filtro) { 
        try {
            const { db, client } = await connect(); 
            const result = await db.collection("usuarios").deleteMany(filtro);
            console.log("Usuários deletados:", result.deletedCount); 
            client.close(); // [cite: 16, 21]
        } catch (error) {
            Logger.log("Erro ao deletar usuários: " + error); 
            console.error("Erro ao deletar usuários:", error); 
        }
    }
};