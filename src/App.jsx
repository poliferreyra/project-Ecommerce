import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { Home } from './pages/Home'
import { Products } from './pages/product/Products'
import { Login } from './pages/aut/Login'
import { Cart } from './pages/cart/Cart'
import { NotFound } from './pages/NotFound'
import Register from './pages/aut/Register'
import { AboutUs } from './pages/AboutUs'
import { Detail } from './pages/product/Detail'
import { Checkout } from './pages/cart/Checkout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Orders } from './pages/Orders'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box bg="body">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  )
}

export default App
