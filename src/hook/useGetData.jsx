import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export const useGetData = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await getAllProducts()
        console.log(allProducts)
        setLoading(false)
        setProducts(allProducts)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])
  return {
    products,
    loading,
    error,
  }
}
