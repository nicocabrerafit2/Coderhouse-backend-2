import { Router } from "express";
const router = Router()

router.get("/",(req,res)=>{
    res.send("El home")
})
router.get("/register",(req,res)=>{
    res.send("El register")
})

export default router