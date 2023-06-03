import {
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Button,
  ButtonGroup,
  Text,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
// import womanhome from '../assets/womanhome.png'
/* eslint-disable react/no-unescaped-entities */
import { useGetProducts } from '../hook/useGetProducts'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Home = () => {
  const { loading, error, filterProductsByLimit } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)

  return (
    <>
      {error && (
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Oops! an error happended</AlertTitle>
          </Alert>
        </>
      )}
      {/* {!filterProductsByLimit.length && !loading && (
        <Text>There're not products</Text>
      )} */}

      <Stack>
        <HStack>
          <Box w="100%" h="330px" position="relative">
            <Box w="75%">
              <Heading size="sm" p={10} color="black">
                Welcome to our online perfume and cosmetics store! <br />
                Discover a wide variety of high-quality products to enhance your
                natural beauty and highlight your personal style.
              </Heading>
            </Box>
            <Link
              p={2}
              ml="30px"
              fontWeight="bold"
              borderRadius="10px"
              bg="#F5E90C"
              as={NavLink}
              to="/aboutUs"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
              }}
            >
              About us
            </Link>
          </Box>
        </HStack>
        {loading && (
          <HStack justifyContent="center">
            <Spinner />
          </HStack>
        )}
        <HStack>
          <Heading ml={3} size="md">
            Favorite Products
          </Heading>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} p={2}>
          {filterProductsByLimit.map((product) => (
            <Box key={product.id} w="100%" h="80%" align="center">
              <Box w="100%" p={2} m={1}>
                <Image
                  src={product.img}
                  alt={product.prodName}
                  borderRadius="lg"
                  maxW="70%"
                  maxH="40%"
                />
                <Stack mt="6">
                  <Text fontWeight="semibold" fontSize="sm">
                    {product.prodName}
                  </Text>

                  <Text color="blue.600" fontSize="1xl">
                    {`$ ${product.price}`}
                  </Text>
                </Stack>
                <ButtonGroup m={1}>
                  <Button
                    as={NavLink}
                    size={{ base: 'xs', md: 'sm' }}
                    variant="solid"
                    bg="#A2EAF4"
                    to={`/products/${product.id}`}
                    _hover={{
                      fontWeight: 'semibold',
                      color: '#DF166D',
                    }}
                  >
                    See detail
                  </Button>
                  <Button
                    size={{ base: 'xs', md: 'sm' }}
                    variant="solid"
                    bg="#F5E90C"
                    _hover={{
                      fontWeight: 'semibold',
                      color: '#DF166D',
                    }}
                    onClick={() => addProductToCart(product, 1)}
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  )
}
