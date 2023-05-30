import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export const useGetProducts = () => {
  const [dbProducts, setDbProducts] = useState([])
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

  const handleFilter = (e) => {
    setFilterProd({ ...filterProd, [e.target.name]: e.target.value })
  }

  const filterProducts = () => {
    const newProducts = dbProducts.filter((p) => {
      return (
        p.prodName.includes(filterProd.prodName) ||
        p.category === filterProd.category ||
        p.price < Number(filterProd.price)
      )
    })
    setRenderProducts(newProducts)
  }

  useEffect(() => {
    filterProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterProd])

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
  return {
    dbProducts,
    loading,
    error,
    filterProd,
    handleFilter,
    filterProducts,
    renderProducts,
  }
}
