// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBm_iP6u5AlpCpNYZK1J3uQMI7nhwm4so',
  authDomain: 'ecommerce-6aef3.firebaseapp.com',
  projectId: 'ecommerce-6aef3',
  storageBucket: 'ecommerce-6aef3.appspot.com',
  messagingSenderId: '472697800542',
  appId: '1:472697800542:web:4d3f86a7131424234e71cf',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
