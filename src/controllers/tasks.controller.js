import { newConnection } from "../bd.js"

const getAllTasks = async (req, res)=> {
    try {
    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")
    res.json(result[0])
    connection.end()
    } catch (error) {
    console.log(error);
    res.status(500).send("error del servidor")
    }
}

const getOneTasks = async (req, res) => {
    try {
        const connection = await newConnection()
        const { id } = req.params
        const results = await connection.query("SELECT * FROM tasks WHERE id = ?", id)
        res.json(results[0])
        connection.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Error deL servidor al intentar obtener una tarea")
    }

}
const createTask = async (req, res) => {
    try {
        const connection = await newConnection()
        const { title, description, isComplete } = req.body
        connection.query("INSERT INTO tasks (title, description, isComplete) values (?, ?, ?)", [title, description, isComplete])
        res.send("tarea creada correctamente")
        connection.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("error al crear una nueva tarea")
        
    }
}
const deleteTask =  async (req, res) => {
    try {
        const connection = await newConnection()
        const { id } = req.params
        const results = await connection.query("DELETE FROM tasks WHERE id = ?", id)
        res.json(results[0])
        connection.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Error deL servidor al intentar borrar una tarea")
    }
}
const editarTask = async (req, res) => {
    try {
        const connection = await newConnection()
    const { id } = req.params
    const { title, description, isComplete } = req.body
    await connection.query("UPDATE tasks SET title = ? , description = ?, isComplete = ? WHERE id = ?", [title, description, isComplete, id])
    res.send("tarea actualizada con exito")
    connection.end
    } catch (error) {
        console.log(error)
        res.status(500).send("Error deL servidor al intentar actualizar una tarea")
    }
}
export{getAllTasks, getOneTasks, createTask, deleteTask, editarTask }