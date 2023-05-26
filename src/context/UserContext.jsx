import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // console.log(user)
  const handleLogin = (data) => {
    // traigo el dato del email del login
    setUser(data.email)
  }
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email
        setUser(uid)
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
