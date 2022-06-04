//IMPORTANDO O EXPRESS (uma pasta)
//como o valor do express não muda, chamo ele pela const
const express = require("express") 

//CRIAR UMA CONSTANTE PARA O APP, e ele vai chamar a express
//colocando na const app tudo que tem no express
const app = express() //chamando a função express

//importanto o cors
const cors = require("cors")

//pelo método use (que PRECISA DE PARAMETROS), vou configurar o body parser
app.use(express.json()) //preciso chamar o json como uma função

//configurando o cors
app.use(cors())

//exportando o module app
module.exports = app 

