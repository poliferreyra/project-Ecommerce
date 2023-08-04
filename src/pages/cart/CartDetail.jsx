import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  IconButton,
  HStack,
  Heading,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartContext } from '../../context/CartContext'

export const CartDetail = ({ hideQuanitity }) => {
  const { cart, addProductToCart, deleteProductCart } = useContext(CartContext)

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={3}>
      {cart.map((cartProduct, index) => (
        <Card key={index} p={1}>
          <CardBody>
            {/* heading and icon delete */}
            <HStack justifyContent="space-between">
              <Box>
                <Heading size={{ base: 'xs', md: 'sm' }}>
                  {cartProduct.prodName}
                </Heading>
              </Box>
              <Box alignSelf="flex-end">
                <IconButton
                  size={{ base: 'xs', md: 'sm' }}
                  variant="outline"
                  color="tomato"
                  aria-label="Delete-Product"
                  onClick={() => deleteProductCart(cartProduct.id)}
                  icon={<AiFillDelete />}
                />
              </Box>
            </HStack>
            {/* detail - img/quantity/total */}
            <HStack justifyContent="space-between" mb={3} p={1}>
              <Image
                objectFit="cover"
                objectPosition="center"
                boxSize="100px"
                maxW="100%"
                maxH="100%"
                src={cartProduct.img}
                alt="Product Image"
              />
              {/* quantity */}
              {!hideQuanitity && (
                <Box align="center">
                  <Text
                    colorScheme="teal"
                    size="sm"
                    fontWeight="bold"
                    fontSize={{ base: '10px', md: '12px', lg: '14px' }}
                  >
                    Quantity
                  </Text>
                  <Stack
                    w="100%"
                    direction="row"
                    align="center"
                    justifyContent="center"
                  >
                    <Button
                      color="red"
                      borderRadius="50%"
                      size={{ base: 'xs', md: 'sm' }}
                      isDisabled={cartProduct.quantity === 1}
                      onClick={() => addProductToCart(cartProduct, -1)}
                    >
                      -
                    </Button>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                    >
                      {cartProduct.quantity}
                    </Text>
                    <Button
                      color="red"
                      borderRadius="50%"
                      size={{ base: 'xs', md: 'sm' }}
                      isDisabled={cartProduct.quantity === cartProduct.stock}
                      //onClick={() => addQuantityToProduct(index)}
                      onClick={() => addProductToCart(cartProduct, 1)}
                    >
                      +
                    </Button>
                  </Stack>
                </Box>
              )}
              {/* total */}
              <Box align="center">
                <Text
                  fontSize={{ base: '12px', md: '12px', lg: '14px' }}
                  fontWeight="bold"
                >
                  Total
                </Text>
                <Stack
                  w="100%"
                  direction="row"
                  align="center"
                  justifyContent="center"
                >
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: '10px', md: '12px', lg: '14px' }}
                  >
                    {' '}
                    $ {cartProduct.quantity * cartProduct.price}
                  </Text>
                </Stack>
              </Box>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  )
}
