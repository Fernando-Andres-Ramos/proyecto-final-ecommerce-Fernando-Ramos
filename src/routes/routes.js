import { Router } from "express"
const router = Router()

import users from "./users.js"

router.use('/users',users)

router.all('/{*splat}',(req,res)=>{
  res.status(404).json({Error:404,Description:`Ruta no implementada`})
})

export default router