import {
  Box,
  IconButton,
  HStack,
  Hide,
  Image,
  Grid,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { CartContext } from '../../context/CartContext'

export const CartDetail = () => {
  const {
    cart,
    addQuantityToProduct,
    SubstractQuantityToProduct,
    deleteProductCart,
  } = useContext(CartContext)

  return (
    <Grid columns={{ base: '1', md: '3' }} gap={4} mt={6}>
      {cart.map((cartProduct, index) => (
        <Stack
          key={index}
          border="solid 1px gray"
          maxW="50%"
          justifyContent="space-between"
          alignContent="center"
          p={4}
        >
          <HStack justifyContent="space-between">
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

          <HStack
            maxW="500px"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            <Box w="60%">
              <Image
                objectFit="cover"
                objectPosition="center"
                w="100%"
                h="100%"
                src={cartProduct.img}
                alt="Product Image"
              />
            </Box>
            <Hide below="md">
              <Box w="100%" h="130px">
                <Text>Quantity</Text>
                <Stack
                  w="100%"
                  h="130px"
                  direction="row"
                  align="center"
                  justifyContent="center"
                  alignItems="start"
                >
                  <Button
                    color="red"
                    size="sm"
                    onClick={() => SubstractQuantityToProduct(index)}
                  >
                    -
                  </Button>
                  <Text colorScheme="teal" size="sm">
                    {cartProduct.quantity}
                  </Text>
                  <Button
                    color="red"
                    size="sm"
                    onClick={() => addQuantityToProduct(index)}
                  >
                    +
                  </Button>
                </Stack>
              </Box>
            </Hide>
            <Box w="100%" h="130px">
              <Text>Total</Text>
              {cartProduct.quantity * cartProduct.price}
            </Box>
          </HStack>
        </Stack>
      ))}
    </Grid>
  )
}
