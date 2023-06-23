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

  // borra producto
  const deleteProductCart = (id) => {
    const newCartDelete = [...cart].filter((p) => p.id !== id)
    setCart(newCartDelete)
    toast({
      title: 'Delete product',
      description: 'The product was deleted from the cart',
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }

  // vacia carrito
  const emptyCart = () => {
    setCart([])
    navigate('/')
    toast({
      title: 'Empty cart',
      description: 'The cart is empty',
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
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
        deleteProductCart,
        emptyCart,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
