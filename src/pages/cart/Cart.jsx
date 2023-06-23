import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CartDetail } from './CartDetail'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export const Cart = () => {
  const { emptyCart, cartTotalPrice, cart } = useContext(CartContext)

  return (
    <>
      {!cart.length ? (
        <VStack justifyContent="center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Text fontWeight="bold">There're not products in the cart</Text>

          <Button bg="#F5E90C" fontWeight="bold">
            <Link
              p={2}
              as={NavLink}
              to="/products"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
              }}
            >
              Shop Now
            </Link>
          </Button>
        </VStack>
      ) : (
        <Flex flexDirection="column" minH="75vh" m={6}>
          <Heading>Shopping Cart</Heading>
          <Stack flex="1">
            <CartDetail />
          </Stack>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Box h="40px">
              <Heading fontSize="2xl">Total : $ {cartTotalPrice()}</Heading>
            </Box>
            <Box h="40px">
              <ButtonGroup spacing="6">
                <Button variant="outline" color="#DF166D" onClick={emptyCart}>
                  Empty cart
                </Button>

                <Button bg="#F5E90C" fontWeight="bold">
                  <Link
                    p={2}
                    as={NavLink}
                    to="/checkout"
                    _hover={{
                      fontWeight: 'semibold',
                      color: '#DF166D',
                    }}
                  >
                    Checkout
                  </Link>
                </Button>
              </ButtonGroup>
            </Box>
          </VStack>
        </Flex>
      )}
    </>
  )
}
