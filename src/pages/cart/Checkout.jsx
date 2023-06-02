import { Box, Stack } from '@chakra-ui/react'
import { CartDetail } from './CartDetail'
import { InfoCheckout } from './InfoCheckout'

export const Checkout = () => {
  return (
    <Stack direction={{ base: 'column', lg: 'row' }}>
      <Box w="100%" p={3}>
        <CartDetail hideQuanitity={true} />
      </Box>
      <Box w="100%" p={3} alignSelf="center">
        <InfoCheckout />
      </Box>
    </Stack>
  )
}
