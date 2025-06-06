const Usuario = require("./usuarios");
const Categoria = require("./categorias");
const Evento = require("./eventos");
const Convidado = require("./convidados");
const { ObjectId } = require("mongodb")

async function testarInsercaoUsuario() {
    const user = new Usuario("usuario1",
    "usuario1@email.com", "senha123");
    await user.inserir();
}

async function testarInsercaoCategoria() {
    const categoria = new Categoria("Trabalho", "#ff0000");
    await categoria.inserir();
}

// Função teste de inserção de 2 eventos, precisa ser passado as referências ao usuário e a categoria
async function testarInsercaoEvento(categoria_id, usuario_id) {
    const evento = new Evento(
        "Reunião com equipe #1",
        "Planejamento semanal dos projetos",
        "2025-06-01",
        "14:00",
        "15:00",
        "Sala 02 ou via Google Meet",
        categoria_id,
        usuario_id,
        [
            {
                nome: "Ciclano",
                email: "ciclano@email.com"
            }
        ]
    );

    const evento2 = new Evento(
        "Reunião com equipe #2",
        "Planejamento semanal dos projetos",
        "2025-06-08",
        "14:00",
        "15:00",
        "Sala 02 ou via Google Meet",
        categoria_id,
        usuario_id,
        [
            {
                nome: "Ciclano",
                email: "ciclano@email.com"
            }
        ]
    );
    await evento.inserir();
    await evento2.inserir();
}

async function testarInsercaoConvidado(evento_id) {
    const convidado = new Convidado(
        evento_id,
        "Ciclano",
        "ciclano@email.com",
        "Confirmado"
    );
    await convidado.inserir();
}

// Teste pra inserir os dados no banco de dados
async function testarInsercao(){
    await testarInsercaoUsuario();
    await testarInsercaoCategoria();

    // Busca o usuario e a categoria inseridos para poder acessar o seu ObjectId
    let user = await Usuario.buscar({nome: "usuario1"});
    let categoria = await Categoria.buscar({nome: "Trabalho"});

    // Insere 2 evento com as referencias usuario_id e categoria_id do resultado das buscas anteriores
    await testarInsercaoEvento(categoria[0]._id, user[0]._id);
    console.log("categoria_id: ", categoria[0]._id, " - usuario_id: ", user[0]._id);

    // busca os eventos inseridos para pegar o seu ObjectId
    let evento = await Evento.buscar({convidados: [{nome: "Ciclano", email: "ciclano@email.com"}]});

    // insere 2 convidado Ciclano referenciando os 2 eventos diferentes
    for(e of evento){
        await testarInsercaoConvidado(e._id);
    }
}

// Tste busca os eventos do usuário
async function testarbuscarEventosUsuario(){
    // Pegar o ObjectId do usuário
    let user = await Usuario.buscar({nome: "usuario1"});
    let user_id = user[0]._id;
    
    // busca eventos pelo id do usuário
    await Evento.buscar({usuario_id: user_id});
}

testarInsercao();
//testarbuscarEventosUsuario();


