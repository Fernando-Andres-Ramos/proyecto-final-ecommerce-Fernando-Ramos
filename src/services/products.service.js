import { 
  getAllProducts, 
  createProduct, 
  getProductByID,  
  updateProduct, 
  deleteProductById}  
from '../models/products.models.firestore.js';

/* import {
  getAllProducts, 
  createProduct, 
  getProductByID, 
  updateProduct, 
  deleteProductById} 
from "../models/products.models.js"; */

export const getAll = async () => {
  return await getAllProducts()
}

export const findById = async (id) => {
  return await getProductByID(id)
}

export const createItem = async (data) => {
  return await createProduct(data)
}

export const updateItem = async (id,data) => {
  return await updateProduct(id,data)
}

export const deleteItem = async (id) =>{
  return await deleteProductById(id)
}