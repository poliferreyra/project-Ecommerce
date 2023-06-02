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
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartContext } from '../../context/CartContext'

export const CartDetail = ({ hideQuanitity }) => {
  const {
    cart,
    addQuantityToProduct,
    SubstractQuantityToProduct,
    deleteProductCart,
  } = useContext(CartContext)

  return (
    <Stack mt={6} w={{ base: '90%', md: '50%', lg: '80%' }}>
      {cart.map((cartProduct, index) => (
        <Stack key={index} border="1px solid black" p={5}>
          <HStack
            justifyContent="space-between"
            mb={3}
            border="1px solid black"
            p={1}
          >
            <Box>
              <Heading size="xs">Product detail</Heading>
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
          <SimpleGrid columns={3}>
            <Box
              height="100%"
              w={{ base: '100%', md: '60%' }}
              display="flex"
              justifyContent="center"
              mt={4}
            >
              <Image
                objectFit="cover"
                objectPosition="center"
                boxSize="100px"
                maxW="100%"
                maxH="100%"
                src={cartProduct.img}
                alt="Product Image"
              />
            </Box>
            {!hideQuanitity && (
              <Box
                height="100%"
                textAlign="center"
                w={{ base: '100%', md: '50%' }}
                m={4}
              >
                <Text
                  colorScheme="teal"
                  size="sm"
                  fontWeight="bold"
                  fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                >
                  Quantity
                </Text>
                <Stack
                  w="100%"
                  direction={{ base: 'column', sm: 'row' }}
                  align="center"
                  justifyContent="center"
                >
                  <Button
                    color="red"
                    borderRadius="50%"
                    size={{ base: 'xs', md: 'sm' }}
                    isDisabled={cartProduct.quantity === 1}
                    onClick={() => SubstractQuantityToProduct(index)}
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
                    onClick={() => addQuantityToProduct(index)}
                  >
                    +
                  </Button>
                </Stack>
              </Box>
            )}

            <Box
              height="100%"
              textAlign="center"
              w={{ base: '100%', md: '50%' }}
              m={4}
            >
              <Text
                fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                fontWeight="bold"
              >
                Total
              </Text>
              <Stack
                w="100%"
                direction={{ base: 'column', sm: 'row' }}
                align="center"
                justifyContent="center"
              >
                <Text
                  fontWeight="bold"
                  fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                >
                  {' '}
                  $ {cartProduct.quantity * cartProduct.price}
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      ))}
    </Stack>
  )
}
