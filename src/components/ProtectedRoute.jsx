import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext)

  // const user = true

  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
