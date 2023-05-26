import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  StackDivider,
  VStack,
} from '@chakra-ui/react'
import { CartDetail } from './CartDetail'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

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
            <Button variant="solid" color="white" bg="#38A169">
              Check Out
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Flex>
  )
}
