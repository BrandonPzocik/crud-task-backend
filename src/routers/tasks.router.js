const { newConnection } = require("../bd").default
const { getAllTasks, getOneTasks, createTask, deleteTask, editarTask } = require("../controllers/tasks.controller").default

const router = require("express").Router()
//obtener todas las tareas 
router.get("/tasks", getAllTasks)

//obtener una tarea por su id 
router.get("/task/:id", getOneTasks)

//añadir una nueva tarea 
router.post("/tasks", createTask)

// eliminar una tarea por id
router.delete("/task/:id", deleteTask)

//editar una tarea por su id
router.put("/task/:id", editarTask)
module.exports = router