import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layout/AppLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Login } from './pages/aut/Login'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'
import Register from './pages/aut/Register'

function App() {
  return (
    // <AppLayout>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </AppLayout>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
