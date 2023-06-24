import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { query, orderBy, limit } from 'firebase/firestore'

// Trae toda la coleccion de productos
export const getAllProducts = async () => {
  let allProducts = []
  const querySnapshot = await getDocs(collection(db, 'products'))
  querySnapshot.forEach((doc) => {
    allProducts.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return allProducts
}

// Trae los productos filtrados por fecha y limita la cantidad
export const getProductsOrderBy = async () => {
  let productsByLimit = []
  const q = query(
    collection(db, 'products'),
    orderBy('createdAt', 'desc'),
    limit(6)
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    productsByLimit.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return productsByLimit
}

// Crea coleccion/documentos - Orders

export const createOrders = async (order) => {
  const docRef = await addDoc(collection(db, 'orders'), order)
  return docRef
}
