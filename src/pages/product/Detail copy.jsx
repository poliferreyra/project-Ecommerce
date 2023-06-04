/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  SimpleGrid,
  Flex,
  Image,
  Stack,
  Box,
  Heading,
  Text,
  StackDivider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useGetProducts } from '../../hook/useGetProducts'
import { useState } from 'react'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useToast } from '@chakra-ui/react'

export const Detail = () => {
  const [quantity, setQuantity] = useState(1)
  console.log(quantity)

  const { id } = useParams()
  const { dbProducts, error } = useGetProducts()
  const { addProduct, cart } = useContext(CartContext)
  const toast = useToast()

  const product = dbProducts.find((p) => p.id === id)

  const addProductToCart = () => {
    const existingProduct = cart.some((p) => p.id === product.id)
    if (existingProduct) {
      const newQuantity = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
      setQuantity(newQuantity)
    } else {
      addProduct({
        ...product,
        quantity,
      })
      toast({
        title: 'Add Product',
        description: 'Your product was added to the cart',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
    // addProduct({
    //   ...product,
    //   quantity,
    // })
  }

  if (!dbProducts.length) {
    return (
      <HStack justifyContent="center">
        <Spinner />
      </HStack>
    )
  } else {
    return (
      <>
        {error && (
          <HStack justifyContent="center">
            <Alert w="400px" status="error">
              <AlertIcon />
              <AlertTitle>Your request couldn't be completed</AlertTitle>
            </Alert>
          </HStack>
        )}

        <Container maxW="xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={'md'}
                alt={product.prodName}
                src={product.img}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '300px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}
                >
                  {product.prodName}
                </Heading>
                <Text color="black" fontWeight={300} fontSize={'xl'}>
                  $ {product.price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor="black" />}
              >
                <Text
                  color="black"
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight={'300'}
                >
                  {product.description}
                </Text>
              </Stack>
              <NumberInput
                defaultValue={1}
                min={1}
                max={product.stock}
                onChange={(value) => setQuantity(Number(value))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Button
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'sm'}
                py={'7'}
                bg="#F5E90C"
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'md',
                  color: '#DF166D',
                }}
                onClick={addProductToCart}
              >
                Add to cart
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      </>
    )
  }
}
