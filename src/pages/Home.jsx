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
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
// import womanhome from '../assets/womanhome.png'
/* eslint-disable react/no-unescaped-entities */
import { useGetProducts } from '../hook/useGetProducts'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Spinner } from '../ui/Spinner'

export const Home = () => {
  const { loading, error, filterProductsByLimit } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)

  return (
    <>
      {error && <Text>There's an error</Text>}
      {!filterProductsByLimit.length && !loading && (
        <Text>There're not products</Text>
      )}

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

            {/* <Image
            w={{ base: '48%', md: '38%', lg: '30%', xl: '25%' }}
            src={womanhome}
            alt="Home Imgage"
            position="absolute"
            bottom="0"
            right="-10"
          /> */}

            <Link
              p={2}
              ml="30px"
              color="white"
              fontWeight="bold"
              borderRadius="10px"
              bg="#F29101"
              borderColor="#282445"
              as={NavLink}
              to="/aboutUs"
              _hover={{
                fontWeight: 'semibold',
                color: '#282445',
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
          <Heading size="md">Favorite Products</Heading>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} p={2}>
          {filterProductsByLimit.map((product) => (
            <Box key={product.id} w="90%" h="80%" align="center">
              <Box w="100%" p={2} m={1}>
                <Image
                  src={product.img}
                  alt={product.prodName}
                  borderRadius="lg"
                  maxW="70%"
                  maxH="40%"
                />
                <Stack mt="6">
                  <Heading size="md">{product.prodName}</Heading>
                  {/* <Text>{product.description}</Text> */}
                  <Text color="blue.600" fontSize="1xl">
                    {`$ ${product.price}`}
                  </Text>
                </Stack>
                <ButtonGroup m={1}>
                  <Button
                    as={NavLink}
                    size={{ base: 'xs', md: 'sm' }}
                    variant="solid"
                    colorScheme="blue"
                    to={`/products/${product.id}`}
                  >
                    See detail
                  </Button>
                  <Button
                    size={{ base: 'xs', md: 'sm' }}
                    variant="solid"
                    bg="tomato"
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
