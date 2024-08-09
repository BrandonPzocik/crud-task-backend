import express, { json } from "express"
const app = (express())
app.use(json())
import {router} from "./routers/router.js"

app.use(router)

app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})