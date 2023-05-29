import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export const useGetProducts = () => {
  const [products, setProducts] = useState([])
  console.log(products)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filterProd, setFilterProd] = useState({
    prodName: '',
    category: '',
    price: 0,
  })
  console.log(filterProd)

  const handleFilter = (e) => {
    setFilterProd({ ...filterProd, [e.target.name]: e.target.value })
    filterProducts()
  }

  const filterProducts = () => {
    const newProducts = products.filter((p) => {
      return (
        p.prodName.includes(filterProd.prodName) &&
        p.category === filterProd.category &&
        p.price <= filterProd.price
      )
    })

    setProducts(newProducts)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await getAllProducts()

        setLoading(false)
        setProducts(allProducts)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [filterProd])
  return {
    products,
    loading,
    error,
    filterProd,
    handleFilter,
    filterProducts,
  }
}
