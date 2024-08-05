const express = require("express")
const main = (express())
main.use(express.json())

const {newConnection} = require("./bd")




main.listen(3000, () => {
    console.log("servidor iniciado en el puerto 3000")
})