const express = require("express");
const app = express(); 
const path = require("path"); 

//guardar sus funcionalidades dentro de una variable


app.use(express.static(path.resolve(__dirname, "../public")));
//utilizar el listen para levantar el servidor
app.listen (3700, () => console.log ("Mercado Liebre")
) 

app.get("/", (req, res)=> 
    res.sendFile (path.join(__dirname, "/views/index.html"))
) 

app.get("/register", (req, res)=> 
    res.sendFile (path.join(__dirname, "/views/register.html"))
)

app.get("/login", (req, res)=> 
    res.sendFile (path.join(__dirname, "/views/login.html"))
)

app.post("/login", (req, res)=> 
    res.sendFile (path.join(__dirname, "/views/index.html"))
)