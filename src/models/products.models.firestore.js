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

    if (querySnapshot.empty) {
      return {
        success: false,
        status: 404,
        error: "No hay productos que mostrar"
      };
    }

    const products = []
    querySnapshot.forEach((doc)=>{
      products.push({id:doc.id, ...doc.data()})
    })
    return {
      success: true,
      status: 200,
      data: products
    };

  }
  catch(err){
    return {
      success: false,
      status: 500,
      error: "Error al buscar los productos"
    };
  }
}

export async function getProductByID(id){
  try{
    const productDoc = await getDoc(doc(productsCollection,id))

    if (!productDoc.exists()) {
      return {
        success: false,
        status: 404,
        error: "No existe un producto con este ID"
      };
    }

    return {
      success: true,
      status: 200,
      data: { id: productDoc.id, ...productDoc.data() }
    };
  }
  catch (err) {
    return {
      success: false,
      status: 500,
      error: "Error al buscar el producto"
    };
  }
}

export async function createProduct(product){
  try{
    await addDoc(productsCollection,product)
    return {
      success: true,
      status: 201,
      data: { message: "Producto creado exitosamente" }
    };

  }
  catch(err){
    return {
      success: false,
      status: 500,
      error: "Error al crear el producto"
    }
  }
}

export async function updateProduct(idToUpdate, data){
  try{
    const docRef = doc(productsCollection, idToUpdate);
    const snapshot = await getDoc(docRef)

    if (!snapshot.exists()) {
      return {
        success: false,
        status: 404,
        error: "No existe un producto con este ID"
      };
    }

    await updateDoc(docRef, {...data});

    return {
      success: true,
      status: 200,
      data: { message: "Producto actualizado exitosamente" }
    }
  }

  catch (err) {
    console.error("Error al actualizar:", err);
    return {
      success: false,
      status: 500,
      error: "Error al actualizar el producto"
    };
  }

}

export async function deleteProductById(idToDelete){
  try{
    const docRef = doc(productsCollection, idToDelete);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return {
        success: false,
        status: 404,
        error: "No existe un producto con este ID"
      };
    }

    await deleteDoc(docRef)
    return {
      success: true,
      status: 200,
      data: { message: "Producto eliminado exitosamente" }
    };

  }
  catch (err) {
    console.error("Error al borrar:", err);
    return {
      success: false,
      status: 500,
      error: "Error al borrar el producto"
    };
  } 
}