import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Link,
  Stack,
  StackDivider,
  VStack,
} from '@chakra-ui/react'
import { CartDetail } from './CartDetail'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export const Cart = () => {
  const { emptyCart, cartTotalPrice } = useContext(CartContext)

  return (
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
            <Button variant="outline" color="tomato" onClick={emptyCart}>
              Empty cart
            </Button>

            <Button bg="#38A169" color="white" fontWeight="bold">
              <Link
                p={2}
                as={NavLink}
                to="/checkout"
                _hover={{
                  fontWeight: 'semibold',
                  color: '#282445',
                }}
              >
                Checkout
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Flex>
  )
}
