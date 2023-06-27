import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

// Crea coleccion/documentos - Orders
export const createOrders = async (order) => {
  const docRef = await addDoc(collection(db, 'orders'), order)
  return docRef
}

// Trae todas las ordenes de un uid
export const getOrdersbyUid = async (uid) => {
  const q = query(collection(db, 'orders'), where('user.uid', '==', uid))
  let ordersByUid = []
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    ordersByUid.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return ordersByUid
}
