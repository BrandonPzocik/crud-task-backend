const express = require("express")
const app = (express())
app.use(express.json())
const router = require("./routers/router")

app.use(router)

app.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})