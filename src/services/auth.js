import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const loginWithEmail = async (data) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  )
  const user = userCredential.user
  // const uid = userCredential.user.uid
  // console.log(user)
  // console.log(uid)
  return user
}

export const registerAccount = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    // email y uid cuando creo la cuenta
    // const uid = userCredential.user.uid
    // const userEmail = userCredential.user.email
    // console.log(userEmail)
    // console.log(uid)
    const { user } = userCredential
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
  }
}
