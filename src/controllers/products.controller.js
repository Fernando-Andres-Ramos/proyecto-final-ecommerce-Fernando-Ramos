import * as productServices from "../services/products.service.js"
import { handleResponse } from "../utils/responseHandler.js";

export const getAllProducts = async (req, res)=>{
  const result = await productServices.getAll()
  return handleResponse(res,result)
}

export const getProductsByID = async (req,res)=>{
  const {id} = req.params
  const result = await productServices.findById(id)
  return handleResponse(res,result)
}

export const createProduct = async (req,res)=>{
  const {title,price} = req.body
  const result = await productServices.createItem({title,price})
  return handleResponse(res,result)
}

export const updateProduct = async (req,res) => {
  const {id} = req.params
  const data = req.body
  const result = await productServices.updateItem(id,{...data})
  return handleResponse(res,result)
}

export const deleteProduct = async (req,res) => {
  const {id} = req.params
  const result = await productServices.deleteItem(id)
  return handleResponse(res,result)
}