import { useState } from 'react'
import { createContext } from 'react'
import { setLocalStorage } from '../utils/localStorage,js'
import { useNavigate } from 'react-router-dom'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const navigate = useNavigate()
  const initialCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(initialCart)

  // console.log(cart)
  const addProduct = (product) => {
    setCart([...cart, product])
    setLocalStorage('cart', cart)
  }
  const addProductToCart = (product, quantity) => {
    addProduct({
      ...product,
      quantity,
    })
  }
  const resetCart = (newCartQuantity) => setCart(newCartQuantity)

  const addQuantityToProduct = (index) => {
    cart[index].quantity++
    resetCart([...cart])
    setLocalStorage('cart', cart)
  }
  const SubstractQuantityToProduct = (index) => {
    cart[index].quantity--
    resetCart([...cart])
    setLocalStorage('cart', cart)
  }

  const deleteProductCart = (id) => {
    const newCartDelete = [...cart].filter((p) => p.id !== id)
    setCart(newCartDelete)
    setLocalStorage('cart', cart)
  }
  const emptyCart = () => {
    setCart([])
    setLocalStorage('cart', cart)
    navigate('/')
  }

  const cartTotalPrice = () => {
    const totalPriceProd = cart.map((prod) => {
      const price = prod.price
      const quantity = prod.quantity
      return price * quantity
    })
    const totalPrice = totalPriceProd.reduce((valAcu, valIn) => {
      return valAcu + valIn
    }, 0)
    return totalPrice
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        addProductToCart,
        addQuantityToProduct,
        SubstractQuantityToProduct,
        deleteProductCart,
        emptyCart,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
