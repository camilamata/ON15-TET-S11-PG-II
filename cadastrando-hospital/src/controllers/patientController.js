//aqui fica a lógica do código (tudo o que ele deve fazer)
//"código, faça isso"
//importar o json ou banco de dados deonde vamos tirar nossas informações

//chamando o json na controller
//Data Base dos pacientes
//guardando todas as info do patientModels numa const chamada patientDB por meio de um requirimento
//colocando tudo

//colocando tudo que tá na models naconst patiendDB (data base)
const patientDB = require("../models/patientModels.json")

// LISTAR OS PACIENTES DO HOSPITAL (GET)
const getAll = (request, response) => {
    response.status(200).json({
        "Mensagem": "Esses são os pacientes cadastrados:",
        patientDB
    })
}
//LISTAR POR ID (GET)
const getById = (request, response) => {
    //já vamo matar os erros de uma vez
    //estou identificando o id do parametro
    try {
        const idRequest = request.params.id
        const foundId = patientDB.find(patient => patient.Id == idRequest)
        if(!foundId) {
            throw new Error("ID não encontrado")
        }
        response.status(200).json(foundId)
    } catch (error) {
        response.status(500).json({
            Message: error.message
        })
        console.log(error)
    }
}

// LISRAR POR NOME OU NOME SOCIAL
const getByName = (request, response) => {
    try {
        const nameRequest = request.query.name.toLowerCase()
        const foundName = patientDB.filter(patient => {
            if(patient.socialName) {
               return patient.socialName.toLowerCase().includes(nameRequest)
            }

           return patient.name.toLowerCase().includes(nameRequest)           

        })
        
        if(foundName.length == 0){
            throw new Error("Nome não encontrado")
        }

        response.status(200).json({
            "Mensagem": "Paciente encontrado:",
            foundName
        })


    } catch (error) {
        response.status(500).json({
            message: error.message
        })
        console.log(error)
    }

}
//LISTAR POR ID
// CADASTRAR (POST)
// ATUALIZAR CADASTRO DE UM PACIENTE (PUT)
// DELETAR O CADASTYRO DE UM PACIENTE (DELETE)
// Exportar as variaveis do controller



module.exports = {
    getAll,
    getById,
    getByName
}