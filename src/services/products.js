import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

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
