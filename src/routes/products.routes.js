import {Router} from "express"
import { authentication } from "../middlewares/authentication.js";
import { 
  getAllProducts,
  getProductsByID,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/products.controller.js';

const products = Router()
products.route("/")
  .get(getAllProducts)
  .post(authentication,createProduct)

products.route("/:id")
  .get(getProductsByID)
  .put(authentication,updateProduct)
  .delete(authentication,deleteProduct)

export default products