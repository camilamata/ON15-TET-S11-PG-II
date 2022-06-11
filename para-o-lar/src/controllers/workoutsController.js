//Aqui fica a lógica do código (tudo que ele deve executar)

//Colocando tudo da Models na const clientsDB (de Data Base)
const clientsDB = require("../models/clientsModel.json");
//Colocando tudo da Models (WorkOut) na const workoutsDB (de Data Base)
const workoutsDB = require("../models/workoutsModel.json");


//Pegar o ID do cliente
//Ver qual a preferencia de exercício dele
//Pegar uma lista com todos os exercícios 
//
const teste = (request, response) => {
for (let i = 0; i < workoutsDB.length; i++) {
    let category = workoutsDB[i].category
    let exercise = workoutsDB[i]

    for (let j = 0; j < clientsDB.length; j++) {
        if (clientsDB[j].workoutPreference == category) {
           clientsDB[j].workoutPreference = exercise

        }}}
        response.status(200).json({clientsDB})

    }

/*const workoutType = (request, response) => {
    const { id } = request.params
    try {
        let findClient = clientsDB.slice();        
        if(id) {
            findClient = findClient.find(athlet => athlet.id == id)
            
        };
        if (findClient.length === 0) {
            throw new Error("Esse não deve ser seu ID, pesquise novamente!")
        };
        response.status(200).json({
            "Buscando por": request.query,
            "Essa é a quantidade de atletas por dia da semana": filterClients.length,
             filterClients
        });
    } catch (error) {
        console.error(error);
        response.status(404).json({
            message: error.message,
            details: "Sua busca foi inválida"
        });
    }
}; */

module.exports = {
    teste
}