import { useState } from 'react'
import { createContext } from 'react'
import { setLocalStorage } from '../utils/localStorage,js'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(initialCart)

  console.log(cart)
  const addProduct = (product) => {
    setCart([...cart, product])
    setLocalStorage('cart', cart)
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
  const emptyCart = () => setCart([])

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
