import {Router} from "express"
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
  .post(createProduct)

products.route("/:id")
  .get(getProductsByID)
  .put(updateProduct)
  .delete(deleteProduct)

export default products