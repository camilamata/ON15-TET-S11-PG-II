//Chamando o express
const express = require("express");

//Chamando o controller
const controller = require("../controllers/workoutsController")

//Criando uma variável pro Routes
const router = express.Router();

//rota teste
router.get("/rotaTeste", controller.teste); 


module.exports = router
