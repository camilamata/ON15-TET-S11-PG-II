//Importando o app para o server
const app = require("./src/app")

//Criando a porta
const PORT = 8090

//Acessando o app
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`))