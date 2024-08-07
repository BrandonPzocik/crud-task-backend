const express = require("express")
const app = (express())
app.use(express.json())

const {newConnection} = require("./bd")

//obtener todas las tareas 
app.get("/tasks", async (req, res)=> {
    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")
    response.json(results[0])
    connection.end()
})

//obtener una tarea por su id 
app.get("/tasks/:id", async (request, response) => {
    const connection = await newConnection()
    const id = request.params.id 
    const results = await connection.query("SELECT * FROM tasks WHERE id = ?", id)
    response.json(results[0])
    connection.end()
}) 

//añadir una nueva tarea 
app.post("/tasks", async (req, res) => {
    const connection = await newConnection()
    const {title, description, isComplete} = request.body 
    connection.query("INSERT INTO tasks (title, description, isComplete)")
    response.send("tarea creada correctamente")
    connection.end()
})

app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})