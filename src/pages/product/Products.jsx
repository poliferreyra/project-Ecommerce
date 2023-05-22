/* eslint-disable react/no-unescaped-entities */
// import { useEffect, useState } from 'react'
// import { getAllProducts } from '../../services/products'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Filter } from './Filter'
import { useGetData } from '../../hook/useGetData'

export const Products = () => {
  const { products, loading, error } = useGetData()
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  // // aca voy a renderizar mis productos por lo que tengo que ejecutar la funcion que trae toda la db con todos mis productos
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const allProducts = await getAllProducts()
  //       console.log(allProducts)
  //       setLoading(false)
  //       setProducts(allProducts)
  //     } catch (error) {
  //       setError(true)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   getData()
  // }, [])
  return (
    <>
      {error && <Text>There's an error</Text>}
      {loading && <Text>Loading...</Text>}
      {!products.length && !loading && <Text>There're not products</Text>}
      <Filter />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={2}>
        {products.map((product) => (
          <Card key={product.id} maxW="sm" align="center">
            <CardBody>
              <Image
                src={product.img}
                alt={product.prodName}
                borderRadius="lg"
                maxW="200px"
                maxH="200px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.prodName}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="1xl">
                  {`$ ${product.price}`}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <ButtonGroup m={2}>
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="blue"
                  to={`/products/${product.id}`}
                >
                  See detail
                </Button>
                <Button size="sm" variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  )
}
