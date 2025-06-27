import { v4 as uuidv4 } from 'uuid';
import {productsDB} from "../db/productsDB.js"

export const getAllProducts = async (req, res)=>{
  res.status(200).json(productsDB)
}

export const getProductsByID = async (req,res)=>{
  const {id} = req.params
  const productFinded = productsDB.filter((product)=>product.id==id)
  res.status(200).json(
    productFinded.length>0
    ?productFinded
    :{Message:"No existe el usuario"})
}

export const createProduct = async (req,res)=>{
  const {name,lastname} = req.body
  productsDB.push({name,lastname,id:uuidv4()})
  res.status(201).send({Message:"Product created"})
}

export const updateProduct = async (req,res) => {
  const {id} = req.params
  const data = req.body
  const updatedProducts = productsDB.map(product=>
    product.id==id
    ?{...product,...data}
    :product
  )
  res.status(200).send({Message:"Fake update DB",Products:updatedProducts})
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params
    const newList = productsDB.filter((product)=>product.id!=id)
    res.status(200).send({Message:"Fake delete DB",Products:newList})
}