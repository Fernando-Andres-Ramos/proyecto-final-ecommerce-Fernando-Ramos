import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid';


const __dirname = import.meta.dirname
const dataPath = path.join(__dirname, '../data/products.json')


/* Model functions */
export async function getAllProducts (){
  try{
    const products = JSON.parse(await fs.promises.readFile(dataPath,'utf-8'))
    return products
  }
  catch(err){
    console.log(err)
    return ("Hubo un error al leer los datos")
  }
}


export async function getProductByID (idToFind){
  try{
    const products = JSON.parse(await fs.promises.readFile(dataPath,'utf-8'))
    return products.filter(product=>product.id===idToFind )
  }
  catch(err){
    console.log(err)
    return ("Hubo un error al leer los datos")
  }
}


export async function createProduct (data){
  try{
    const productsDB = await getAllProducts()
    productsDB.push({...data,id:uuidv4()})
    fs.writeFile(dataPath, JSON.stringify(productsDB), (err)=>{
    if(err)
      throw(`Error al guardar el dato`)
    })
    return {Message:"Producto creado"}
  }
  catch(err){
    console.log(err)
    return err
  }
}


export async function updateProduct (id,data){
  try{
    const item = await getProductByID(id)
    console.log(item)
    if (!item.length>0)
      throw {error:"No existe un producto con este ID"}

    const productsDB = await getAllProducts()
    const updatedProducts = productsDB.map(product=>
      product.id==id
      ?{...product,...data}
      :product
    )

    fs.writeFile(dataPath, JSON.stringify(updatedProducts), (err)=>{
    if(err)
      throw(`Error al actualizar el dato`)
    })

    return {Message:"Producto actualizado"}
  }
  catch(err){
    return {Message:"Error al actualizar el producto", Error:err}
  }
}

export async function deleteProductById (idToEliminate){
  try{
    const item = await getProductByID(idToEliminate)
    if (!item.length>0)
      throw {error:"No existe un producto con este ID"}

    const productsDB = await getAllProducts()

    const newList = productsDB.filter((product)=>product.id!=idToEliminate)

    fs.writeFile(dataPath, JSON.stringify(newList), (err)=>{
    if(err)
      throw(`Error al actualizar el dato`)
    })

    return {Message:"Producto eliminado"}
  }
  catch(err){
    return {Message:"Error al eliminar el producto"}
  }
}