
import { getAllTasks, getOneTasks, createTask, deleteTask, editarTask } from "../controllers/tasks.controller.js"
import {Router} from "express"
const tasksRouter = Router()

import { applyValidations } from "../validations/applyValidations.js"
import { validacionesDeTasksCreate,  } from "../validations/validations.js"
import { validacionesDeTasksUpdate } from "../validations/validations.js"



//obtener todas las tareas 
tasksRouter.get("/", getAllTasks)

//obtener una tarea por su id 
tasksRouter.get("/:id", getOneTasks)

//añadir una nueva tarea 
tasksRouter.post("/", validacionesDeTasksCreate, applyValidations, createTask)

// eliminar una tarea por id
tasksRouter.delete("/:id", deleteTask)

//editar una tarea por su id
tasksRouter.put("/:id", validacionesDeTasksUpdate, applyValidations, editarTask)
export {tasksRouter}