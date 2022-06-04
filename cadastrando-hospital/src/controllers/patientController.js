//aqui fica a lógica do código (tudo o que ele deve fazer)
//"código, faça isso"
//importar o json ou banco de dados deonde vamos tirar nossas informações

//chamando o json na controller
//Data Base dos pacientes
//guardando todas as info do patientModels numa const chamada patientDB por meio de um requirimento
const patientDB = require("../models/patientModels.json")

// LISTAR OS PACIENTES DO HOSPITAL (GET)
const getAll = (request, response) => {
    response.status(200).json({
        "Mensagem": "Esses são os pacientes cadastrados:",
        patientDB
    })
}
// LISRAR POR NOME, NOME SOCIAL E ID (GET)
// CADASTRAR (POST)
// ATUALIZAR CADASTRO DE UM PACIENTE (PUT)
// DELETAR O CADASTYRO DE UM PACIENTE (DELETE)
// Exportar as variaveis do controller




module.exports = {
    getAll
}