const express = require("express")
const server= express()

//Configurando a pasta pública
server.use(express.static("public"))

//Utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    nocache: true
})

//Configurando caminhos/rotas
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)