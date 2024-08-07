const express = require("express")
const app = (express())
app.use(express.json())

const {newConnection} = require("./bd")

//obtener todas las tareas 
app.get("/tasks", async (req, res)=> {
    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(results[0])
    connection.end()
})

//obtener una tarea por su id 
app.get("/task/:id", async (req, res) => {
    const connection = await newConnection()
    const {id}= req.params 
    const results = await connection.query("SELECT * FROM tasks WHERE id = ?", id)
    res.json(results[0])
    connection.end()
}) 

//añadir una nueva tarea 
app.post("/tasks", async (req, res) => {
    const connection = await newConnection()
    const {title, description, isComplete} = req.body 
    connection.query("INSERT INTO tasks (title, description, isComplete) values (?, ?, ?)", [title, description, isComplete])
    res.send("tarea creada correctamente")
    connection.end()
})
// eliminar una tarea por id
app.delete("/task/:id", async (req, res) => {
    const connection = await newConnection()
    const {id} = req.params
    const results = await connection.query("DELETE FROM tasks WHERE id = ?", id)
    res.json(results[0])
    connection.end()
})

//editar una tarea por su id
app.put("/task/:id", async (req, res) => {
    const connection = await newConnection()
    const {id} = req.params
    const {title, description, isComplete} = req.body
    await connection.query("UPDATE tasks SET title = ? , description = ?, isComplete = ? WHERE id = ?", [title, description, isComplete, id])
    res.send("tarea actualizada con exito")
    connection.end
})

app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})