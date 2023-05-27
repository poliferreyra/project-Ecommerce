/* eslint-disable react/no-unescaped-entities */
// import { useEffect, useState } from 'react'
// import { getAllProducts } from '../../services/products'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Filter } from './Filter'
import { useGetProducts } from '../../hook/useGetProducts'
import { Link } from 'react-router-dom'
import { Spinner } from '../../ui/spinner'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Products = () => {
  const { products, loading, error } = useGetProducts()
  const { addProduct } = useContext(CartContext)

  const addProductToCart = (product, quantity) => {
    addProduct({
      ...product,
      quantity,
    })
  }

  return (
    <>
      {error && <Text>There's an error</Text>}
      {!products.length && !loading && <Text>There're not products</Text>}
      <Filter />
      {loading && (
        <HStack justifyContent="center">
          <Spinner />
        </HStack>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={2}>
        {products.map((product) => (
          <Box key={product.id} maxW="sm" align="center">
            <Box>
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
            </Box>
            <Box>
              <ButtonGroup m={2}>
                <Button
                  as={Link}
                  size="sm"
                  variant="solid"
                  colorScheme="blue"
                  to={product.id}
                >
                  See detail
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => addProductToCart(product, 1)}
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}
