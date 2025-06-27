import { productsDB } from "../db/productsDB.js"
import { v4 as uuidv4 } from 'uuid';

export const getAll = async () => {
  try{
    return productsDB;
  }
  catch(err){
    return {Message:"Error. Something go wrong"}
  }
}

export const findById = async (id) => {
  try{
    const productFinded = productsDB.filter((product)=>product.id==id)
    return productFinded.length>0 ? productFinded : {Message:"Not existing ID"}
  }
  catch(err){
    return {Message:"Error to find id"}
  }
}

export const createItem = async (data) => {
  try{
    productsDB.push({...data,id:uuidv4()})
    return {Message:"Created"}
  }
  catch(err){
    return {Message:"Error. Not created"}
  }
}

export const updateItem = async (id,data) => {
  try{
    const item = await findById(id)
    if (!Array.isArray(item))
      return item

    const updatedProducts = productsDB.map(product=>
      product.id==id
      ?{...product,...data}
      :product
    )
    return {Message:"Fake update DB",Products:updatedProducts}
  }
  catch(err){
    return {Message:"Error. Fail to update item"}
  }
}

export const deleteItem = async (id) =>{
  try{
    const item = await findById(id)
    if (!Array.isArray(item))
      return item

    const newList = productsDB.filter((product)=>product.id!=id)
    return {Message:"Fake delete DB",Products:newList}
  }
  catch(err){
    return {Message:"Error. Fail to update item"}
  }
}