

//"app, vem cá!"
// ./ pra ele entender que estou pegando uma coisa da minha aplicação
// o app está dentro de src, e a segunda barra pega tudo dentro do app
const app = require("./src/app")

//criando uma porta
const PORT = 8090
//eu preciso acessar o app e utilizar o listen
app.listen(PORT, () => console.log(`Abrindo a porta ${PORT}`))
