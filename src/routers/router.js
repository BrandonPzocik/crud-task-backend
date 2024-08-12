import {Router} from "express"
const router = Router()
import {tasksRouter} from "./tasks.router.js"
router.use("/tasks",tasksRouter)
export {router}