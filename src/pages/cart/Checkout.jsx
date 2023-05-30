import { Box, Stack } from '@chakra-ui/react'
import { CartDetail } from './CartDetail'
import { InfoCheckout } from './infoCheckout'

export const Checkout = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      <Box w="100%" bg="yellow.100" p={3}>
        <CartDetail />
      </Box>
      <Box w="100%" bg="green.300" p={3}>
        <InfoCheckout />
      </Box>
    </Stack>
  )
}
