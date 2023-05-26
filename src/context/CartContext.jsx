import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  console.log(cart)
  const addProduct = (product) => setCart([...cart, product])
  const resetCart = (newCartQuantity) => setCart(newCartQuantity)

  const addQuantityToProduct = (index) => {
    cart[index].quantity++
    resetCart([...cart])
  }
  const SubstractQuantityToProduct = (index) => {
    cart[index].quantity--
    resetCart([...cart])
  }

  const deleteProductCart = (id) => {
    const newCartDelete = [...cart].filter((p) => p.id !== id)
    setCart(newCartDelete)
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
