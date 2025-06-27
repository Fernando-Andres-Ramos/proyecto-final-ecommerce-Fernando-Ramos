import { Router } from "express"
import products from "./products.routes.js"

const router = Router()

router.use('/products',products)
router.all('/{*splat}',(req,res)=>{
  res.status(404).json({Error:404,Description:`Ruta no implementada`})
})

export default router