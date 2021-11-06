import express  from "express";

const port = 5500
const app = express()

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(port, () => {
    console.log("Servidor activo puerto: 5500");
})

