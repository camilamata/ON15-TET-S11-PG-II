//Chamando o express | Porque? pra conseguir acessar o método chamado Router
const express = require("express")

//Chamando o controller
const controller = require("../controllers/patientController")

//criando uma variável pro routes
const routes = express.Router()
//uma rota para cada verbo que vou usar


//ROTA DO GETALL (RETORNA TODOS OS PACIENTES)
routes.get("/allPatients", controller.getAll)


//exportar o routes
module.exports = routes
