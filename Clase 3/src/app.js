import express from "express"
import __dirname from "./utils.js"
import sessionRoutes from "./routes/session.routes.js"

const app = express()
const PORT = 8080
app.use("/",sessionRoutes)
app.listen(PORT,()=>{
    console.log("Servidor on http://localhost:"+PORT);
    
})
