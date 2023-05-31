import { useEffect, useState } from 'react'
import { getAllProducts, getProductsByLimit } from '../services/products'

export const useGetProducts = () => {
  const [dbProducts, setDbProducts] = useState([])
  const [filterProductsByLimit, setFilterProductsByLimit] = useState([])
  // console.log(dbProducts)
  const [renderProducts, setRenderProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filterProd, setFilterProd] = useState({
    prodName: '',
    category: '',
    price: '',
  })
  // console.log(filterProd)

  // filter products functions
  const handleFilter = (e) => {
    setFilterProd({ ...filterProd, [e.target.name]: e.target.value })
  }

  const filterProducts = () => {
    const newProducts = dbProducts.filter((p) => {
      return (
        p.prodName.toLowerCase().includes(filterProd.prodName.toLowerCase()) &&
        (filterProd.category === 'all' || p.category === filterProd.category) &&
        (filterProd.price === '' || p.price < Number(filterProd.price))
      )
    })
    setRenderProducts(newProducts)
  }

  useEffect(() => {
    filterProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterProd])

  // get data - allProducts
  useEffect(() => {
    const getData = async () => {
      try {
        const allProducts = await getAllProducts()

        setLoading(false)
        setDbProducts(allProducts)
        setRenderProducts(allProducts)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const getFilterProducts = async () => {
      try {
        const maxProductsLimit = await getProductsByLimit()

        setLoading(false)
        setFilterProductsByLimit(maxProductsLimit)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getFilterProducts()
  }, [])
  return {
    dbProducts,
    loading,
    error,
    filterProd,
    handleFilter,
    filterProducts,
    renderProducts,
    filterProductsByLimit,
  }
}
