import * as productServices from "../services/products.service.js"

export const getAllProducts = async (req, res)=>{
  res.status(200).json(await productServices.getAll())
}

export const getProductsByID = async (req,res)=>{
  const {id} = req.params
  res.status(200).json(await productServices.findById(id))
}

export const createProduct = async (req,res)=>{
  const {title,price} = req.body
  res.status(201).send(await productServices.createItem({title,price}))
}

export const updateProduct = async (req,res) => {
  const {id} = req.params
  const data = req.body
  res.status(200).send(await productServices.updateItem(id,{...data}))
}

export const deleteProduct = async (req,res) => {
  const {id} = req.params
  res.status(200).send(await productServices.deleteItem(id))
}