import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export const useGetProducts = () => {
  const [products, setProducts] = useState([])
  // console.log(products)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filterProd, setFilterProd] = useState({
    prodName: '',
    category: '',
    price: 0,
  })
  console.log(filterProd)
  const handleFilterSubmit = (e) => {
    e.preventDefault()
    alert('se ejecuto la funcion de onSubmit')
    filterProducts()
  }
  const filterValueProducts = (e) => {
    setFilterProd({ ...filterProd, [e.target.name]: e.target.value })
  }

  const filterProducts = () => {
    // const filterProd = filterProd.prodName
    // const filterCategory = filterProd.category
    // const filterPrice = filterProd.price
    // console.log(filterProd)
    // console.log(filterCategory)
    // console.log(filterPrice)
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
    handleFilterSubmit,
    filterValueProducts,
    filterProducts,
  }
}
