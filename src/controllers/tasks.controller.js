const { newConnection } = require("../bd")

const getAllTasks = async (req, res)=> {
    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(result[0])
    connection.end()
}

const getOneTasks = async (req, res) => {
    const connection = await newConnection()
    const { id } = req.params
    const results = await connection.query("SELECT * FROM tasks WHERE id = ?", id)
    res.json(results[0])
    connection.end()
}
const createTask = async (req, res) => {
    const connection = await newConnection()
    const { title, description, isComplete } = req.body
    connection.query("INSERT INTO tasks (title, description, isComplete) values (?, ?, ?)", [title, description, isComplete])
    res.send("tarea creada correctamente")
    connection.end()
}
const deleteTask =  async (req, res) => {
    const connection = await newConnection()
    const { id } = req.params
    const results = await connection.query("DELETE FROM tasks WHERE id = ?", id)
    res.json(results[0])
    connection.end()
}
const editarTask = async (req, res) => {
    const connection = await newConnection()
    const { id } = req.params
    const { title, description, isComplete } = req.body
    await connection.query("UPDATE tasks SET title = ? , description = ?, isComplete = ? WHERE id = ?", [title, description, isComplete, id])
    res.send("tarea actualizada con exito")
    connection.end
}
module.exports = {getAllTasks, getOneTasks, createTask, deleteTask, editarTask }