import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const loginWithEmail = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    // email y uid cuando me logueo
    // const uid = userCredential.user.uid
    // const userEmail = userCredential.user.email
    const { user } = userCredential
    return user

    // console.log(userEmail)
    // console.log(uid)
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
  }
}

export const register = async ({ email, password }) => {
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
