import { Box, VStack } from '@chakra-ui/react'

import { Slider } from './slider/Slider'

export const Banner = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box w={{ base: '100%', md: '50%' }} maxH="100vh" textAlign="center">
          <VStack>
            <Slider />
          </VStack>
        </Box>
      </Box>
    </>
  )
}
