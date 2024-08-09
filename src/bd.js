import { createConnection } from "mysql2/promise"
const newConnection = async () => {
    const connection = await createConnection({
        host: "localhost" , 
        user: "root", 
        password: "",
        database: "tasks_db"
    })
    return connection
}

export  {newConnection}