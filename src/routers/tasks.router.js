import { newConnection } from "../bd.js"
import { getAllTasks, getOneTasks, createTask, deleteTask, editarTask } from "../controllers/tasks.controller.js"
import {Router} from "express"
const tasksRouter = Router()
//obtener todas las tareas 
tasksRouter.get("/", getAllTasks)

//obtener una tarea por su id 
tasksRouter.get("/:id", getOneTasks)

//añadir una nueva tarea 
tasksRouter.post("/", createTask)

// eliminar una tarea por id
tasksRouter.delete("/:id", deleteTask)

//editar una tarea por su id
tasksRouter.put("/:id", editarTask)
export {tasksRouter}