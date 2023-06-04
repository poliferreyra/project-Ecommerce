/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { Filter } from './Filter'
import { useGetProducts } from '../../hook/useGetProducts'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Products = () => {
  const { renderProducts, loading, error, handleFilter, filterProd } =
    useGetProducts()
  const { addProductToCart } = useContext(CartContext)

  return (
    <>
      <Filter handleFilter={handleFilter} filterProd={filterProd} />
      {!renderProducts.length && !loading && (
        <HStack justifyContent="center">
          <Alert w="400px" status="error">
            <AlertIcon />
            <AlertTitle>There're not products for this search</AlertTitle>
          </Alert>
        </HStack>
      )}
      {error && (
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Oops! an error happended</AlertTitle>
          </Alert>
        </>
      )}
      {loading && (
        <HStack justifyContent="center">
          <Spinner />
        </HStack>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={2}>
        {renderProducts.map((product) => (
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
                  bg="#A2EAF4"
                  to={product.id}
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#DF166D',
                  }}
                >
                  See detail
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  color="#DF166D"
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
