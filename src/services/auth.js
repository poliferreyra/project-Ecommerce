import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const loginWithEmail = async (data) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  )
  const user = userCredential.user
  return user
}

export const registerAccount = async ({ email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  const { user } = userCredential
  return user
}

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const loginWithGoogle = async () => {
  const userGoogle = await signInWithPopup(auth, provider)
  const user = userGoogle.user
  return user
}
