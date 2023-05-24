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
  List,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ListItem,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

// import { useEffect, useState } from 'react'
// import { getAllProducts } from '../../services/products'
import { Loading } from '../../components/Loading'
import { useGetProducts } from '../../hook/useGetProducts'
import { useState } from 'react'

// import { useMemo } from 'react'

export const Detail = () => {
  const [quantity, setQuantity] = useState()
  console.log(quantity)
  const { id } = useParams()
  // console.log(params)
  const { products, error } = useGetProducts()

  // const product = useMemo(() => products.find((p) => p.id === id), [id])
  // console.log(products)

  if (!products.length) {
    return <Loading />
  } else {
    const product = products.find((p) => p.id === id)
    return (
      <>
        {error && <Text>There's an error</Text>}

        <Container maxW={'7xl'}>
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
                h={{ base: '100%', sm: '400px', lg: '500px' }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={'header'}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                >
                  {product.prodName}
                </Heading>
                <Text color="black" fontWeight={300} fontSize={'2xl'}>
                  $ {product.price}
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={'column'}
                divider={<StackDivider borderColor="black" />}
              >
                <Text color="black" fontSize={'2xl'} fontWeight={'300'}>
                  {product.description}
                </Text>

                <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color="black"
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                  >
                    Categories
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2}>
                      {product.categories.map((cat) => (
                        <ListItem key={cat}>{cat}</ListItem>
                      ))}
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>
              <NumberInput
                defaultValue={1}
                min={1}
                max={product.stock}
                onChange={(value) => setQuantity(Number(value))}

                //console.log(value)
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
                size={'lg'}
                py={'7'}
                bg="#F29101"
                color="black"
                textTransform={'uppercase'}
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: 'lg',
                }}
                // onClick={addProductToCart}
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
