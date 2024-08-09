import { body } from "express-validator";

//validacion para cuando el usuario cree una nueva tarea 
export const validacionesDeTasksCreate = [
    body("title")
    .isString().withMessage("El titulo debe ser un String")
    .notEmpty().withMessage("El titulo no puede estar vacio"),
    body("description")
    .isString().withMessage("la descripcion debe ser un string")
    .notEmpty().withMessage("la descripcion no puede estar vacia"),
    body("isComplete")
    .isBoolean().withMessage("isComplete debe ser un boolean")
    .notEmpty().withMessage("isComplete no puede estar vacio")
]

//validacion para cuando el usuario actualice algun campo 
export const validacionesDeTasksUpdate = [
    body("title")
    .optional() //permite no mandar el campo (osea no rellenarlo) pero si lo hace debe seguir las reglas
    .isString().withMessage("El titulo debe ser un string"),
    body("description")
    .optional()
    .isString().withMessage("la descripcion no puede estar vacia"),
    body('isComplete')
    .optional()
    .isBoolean().withMessage("isComplete debe ser un boolean")
]