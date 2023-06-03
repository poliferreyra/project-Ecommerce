import { useEffect, useState } from 'react'
import { getAllProducts, getProductsOrderBy } from '../services/products'

export const useGetProducts = () => {
  const [dbProducts, setDbProducts] = useState([])
  const [filterProdOrderBy, setFilterProdOrderBy] = useState([])
  const [renderProducts, setRenderProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [filterProd, setFilterProd] = useState({
    prodName: '',
    category: '',
    price: '',
  })

  // filter products functions
  const handleFilter = (e) => {
    setFilterProd({ ...filterProd, [e.target.name]: e.target.value })
  }

  const filterProducts = () => {
    const newProducts = dbProducts.filter((p) => {
      return (
        p.prodName.toLowerCase().includes(filterProd.prodName.toLowerCase()) &&
        (filterProd.category === '' || p.category === filterProd.category) &&
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

  // filter new Arrivals products - orderBy & limit
  useEffect(() => {
    const getFilterProducts = async () => {
      try {
        const maxProductsLimit = await getProductsOrderBy()

        setLoading(false)
        setFilterProdOrderBy(maxProductsLimit)
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
    filterProdOrderBy,
  }
}
