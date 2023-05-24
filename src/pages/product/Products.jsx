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
import { useGetProducts } from '../../hook/useGetProducts'
import { Link } from 'react-router-dom'
import { Loading } from '../../components/Loading'

export const Products = () => {
  const { products, loading, error } = useGetProducts()

  return (
    <>
      {error && <Text>There's an error</Text>}
      {!products.length && !loading && <Text>There're not products</Text>}
      <Filter />
      {loading && <Loading />}
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
                  as={Link}
                  size="sm"
                  variant="solid"
                  colorScheme="blue"
                  to={product.id}
                >
                  See detail
                </Button>
                {/* <Button size="sm" variant="ghost" colorScheme="blue">
                  Add to cart
                </Button> */}
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  )
}
