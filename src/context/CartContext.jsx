import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { setLocalStorage } from '../utils/localStorage,js'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const navigate = useNavigate()
  const initialCart = JSON.parse(localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(initialCart)
  const toast = useToast()

  // Agrega producto al carrito
  const addProduct = (product) => {
    setCart([...cart, product])
  }
  const addProductToCart = (product, quantity) => {
    const existingProduct = cart.some((p) => p.id === product.id)
    if (existingProduct) {
      const newCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      )
      setCart(newCart)
    } else {
      addProduct({
        ...product,
        quantity,
      })
      toast({
        title: 'Add Product',
        description: 'Your product was added to the cart',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  // suma cantidad
  const resetCart = (newCartQuantity) => setCart(newCartQuantity)

  const addQuantityToProduct = (index) => {
    cart[index].quantity++
    resetCart([...cart])
  }
  const SubstractQuantityToProduct = (index) => {
    cart[index].quantity--
    resetCart([...cart])
  }

  // borra producto
  const deleteProductCart = (id) => {
    const newCartDelete = [...cart].filter((p) => p.id !== id)
    setCart(newCartDelete)
  }

  // vacia carrito
  const emptyCart = () => {
    setCart([])
    navigate('/')
  }

  // suma totales
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

  useEffect(() => {
    setLocalStorage('cart', cart)
  }, [cart])

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
