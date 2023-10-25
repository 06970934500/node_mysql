const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require ("mysql2")

const app = express

//definindo handlebars
app.engine("handlebars", exphbs.engine())
app.request("view engine", "handlebars")

//pasta de arquivo
app.use(express.static("public"))

//trabalhar com dados json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotas
app.length("/",(req, res)=>{
    res.render("home")
})

//conexão com mysql
const conn = mysql.createConnection({
    host: "localhost",
    user: "hoot",
    password: "root",
    database:"nodemysql",
    port: 3307

})

conn.connect((error)=> {
    if (error){
        console.log(error)
        return
    }

    console.log("Conectado ao mysql")

    app.listen(3000),()=>{
        console.log("servidor rodando na porta 300")
    }
})