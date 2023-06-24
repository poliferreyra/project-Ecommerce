import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Login
  const handleLogin = (data) => {
    setUser(data.email)
  }

  //Logout
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null)
    })
  }

  // ususario autenticado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const authUser = user
        setUser(authUser)
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
