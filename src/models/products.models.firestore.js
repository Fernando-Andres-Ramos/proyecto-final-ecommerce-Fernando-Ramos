import { db } from "../data/data.js";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore'

const productsCollection = collection(db,'products')

export async function getAllProducts(){
  try{
    const querySnapshot = await getDocs(productsCollection);

    if(querySnapshot.empty)
      return {Message:"No hay productos que mostrar"}

    const products = []
    querySnapshot.forEach((doc)=>{
      products.push({id:doc.id, ...doc.data()})
    })
    return products
  }
  catch(err){
    return {Message:"Error al buscar los productos"}
  }
}

export async function getProductByID(id){
  try{
    const productDoc = await getDoc(doc(productsCollection,id))
    if (productDoc.exists())
      return productDoc.data()
    else
      throw {error:"No existe un producto con este ID"}
  }
  catch(err){
    return {Message:"Error al buscar el producto"}
  }
}

export async function createProduct(product){
  try{
    await addDoc(productsCollection,product)
    return {Message:"Producto creado exitosamente"}
  }
  catch(err){
    return {Message:"Error al crear el producto"}
  }
}

export async function updateProduct(idToUpdate, data){
  try{
    const docRef = doc(productsCollection, idToUpdate);
    await updateDoc(docRef, {
      ...data
    });
    return {Message:"Producto actualizado exitosamente"}
  }
  catch(err){
    return {Message:"Error al actualizar el producto"}
  }
}

export async function deleteProductById(idToDelete){
  try{
    await deleteDoc(doc(productsCollection,idToDelete))
    return {Message:"Producto eliminado"}
  }
  catch(err){
    return {Message:"Error al borrar el producto"}
  }
}