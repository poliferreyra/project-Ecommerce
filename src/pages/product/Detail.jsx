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

export const Detail = () => {
  const [quantity, setQuantity] = useState(1)

  const { id } = useParams()
  const { dbProducts, error } = useGetProducts()
  const { addProductToCart } = useContext(CartContext)

  const product = dbProducts.find((p) => p.id === id)

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
            <Flex alignItems="center">
              <Image
                rounded={'md'}
                alt={product.prodName}
                src={product.img}
                fit={'cover'}
                align={'center'}
                w={{ base: '70%', lg: '100%' }}
                h={{ base: '90%', sm: '250px', lg: '400px' }}
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
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight={'300'}
                >
                  {product.description}
                </Text>
              </Stack>
              <NumberInput
                defaultValue={1}
                min={1}
                max={product.stock}
                size={{ base: 'sm', md: 'md' }}
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
                py={'4'}
                textTransform={'uppercase'}
                size={{ base: 'xs', md: 'sm' }}
                variant="solid"
                bg="primary"
                color="body"
                _hover={{
                  fontWeight: 'semibold',
                  color: 'secondary',
                }}
                onClick={() => addProductToCart(product, quantity)}
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
