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
  Card,
  CardBody,
  Textarea,
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

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} p={2}>
        {renderProducts.map((product) => (
          <Box key={product.id} maxW="sm" align="center">
            <Card borderColor="transparent" variant="outline">
              <CardBody>
                <Image
                  src={product.img}
                  alt={product.prodName}
                  p={2}
                  objectFit="cover"
                  maxW={{ base: '40%', sm: '50%', md: '60%' }}
                  maxH={{ base: '45%', sm: '55%', md: '70%' }}
                />
                <Stack mt="6" spacing="3">
                  <Heading size={{ base: 'sm', md: 'md' }}>
                    {product.prodName}
                  </Heading>
                  <Textarea
                    defaultValue={product.description}
                    h={{ base: '18vh', sm: '35vh', md: '30vh', lg: '40vh' }}
                    borderColor="transparent"
                    fontSize={{ base: 'sm', md: 'md' }}
                    isReadOnly
                    overflow="auto"
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '3px', // Ancho barra de desplazamiento
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: 'gray', // Color barra de desplazamiento
                        borderRadius: '4px', // Borde barra de desplazamiento
                      },
                    }}
                  />
                  <Text color="blue.600" fontSize={{ base: 'md', md: 'lg' }}>
                    {`$ ${product.price}`}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Box>
              <ButtonGroup m={2}>
                <Button
                  as={Link}
                  size={{ base: 'xs', md: 'sm' }}
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
                  size={{ base: 'xs', md: 'sm' }}
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
