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
          <Text fontWeight="bold" color="tomato">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            There're not products in the cart
          </Text>

          <Button
            size={{ base: 'xs', md: 'sm' }}
            variant="solid"
            bg="primary"
            color="body"
            _hover={{
              fontWeight: 'semibold',
              color: 'secondary',
            }}
          >
            <Link
              p={2}
              as={NavLink}
              to="/products"
              _hover={{
                fontWeight: 'semibold',
                color: 'secondary',
              }}
            >
              Shop Now
            </Link>
          </Button>
        </VStack>
      ) : (
        // show cart detail
        <Box>
          <Box bg="primary" w="100%">
            <Heading
              ml={3}
              size="xl"
              color="secondary"
              lineHeight="80px"
              textAlign="center"
            >
              Shopping Cart
            </Heading>
          </Box>
          <Flex flexDirection="column" minH="75vh" m={6}>
            <Stack flex="1">
              <CartDetail />
            </Stack>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box h="40px" p={4}>
                <Heading fontSize="xl">Total : $ {cartTotalPrice()}</Heading>
              </Box>
              <Box h="40px">
                <ButtonGroup spacing="6">
                  <Button
                    size={{ base: 'sm', md: 'md' }}
                    variant="ghost"
                    color="primary"
                    _hover={{
                      fontWeight: 'semibold',
                      color: 'tomato',
                    }}
                    onClick={emptyCart}
                  >
                    Empty cart
                  </Button>

                  <Button
                    size={{ base: 'sm', md: 'md' }}
                    variant="solid"
                    bg="primary"
                    color="body"
                    _hover={{
                      fontWeight: 'semibold',
                      color: 'secondary',
                    }}
                  >
                    <Link p={2} as={NavLink} to="/checkout">
                      Checkout
                    </Link>
                  </Button>
                </ButtonGroup>
              </Box>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  )
}
