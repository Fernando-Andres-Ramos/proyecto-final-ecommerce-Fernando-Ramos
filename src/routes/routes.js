import { Router } from "express"
import products from "./products.routes.js"
import auth from "./auth.routes.js"

const router = Router()

router.use('/products',products)
router.use('/login', auth)
router.all('/{*splat}',(req,res)=>{
  res.status(404).json({Error:404,Description:`Ruta no implementada`})
})

export default router