import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { query, orderBy, limit } from 'firebase/firestore'

// esta funcion me trae toda la data de mi coleccion de productos
// luego tengo que ejecutarla en el componente que renderiza
export const getAllProducts = async () => {
  let allProducts = []
  const querySnapshot = await getDocs(collection(db, 'products'))
  querySnapshot.forEach((doc) => {
    // console.log(doc.data(), doc.id)
    allProducts.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  // console.log(allProducts)
  return allProducts
}

export const getProductsOrderBy = async () => {
  let productsByLimit = []
  const q = query(
    collection(db, 'products'),
    orderBy('createdAt', 'desc'),
    limit(6)
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    // console.log(doc.data(), doc.id)
    productsByLimit.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  // console.log(productsByLimit)
  return productsByLimit
}
