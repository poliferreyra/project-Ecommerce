import { Box, Heading, Button, Stack, Image } from '@chakra-ui/react'
import imgBanner from '../assets/imgBanner.png'

export const Banner = () => {
  return (
    <Stack>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={4}
      >
        <Box
          w={{ base: '100%', md: '50%' }}
          maxH="50vh"
          textAlign="center"
          p={2}
          order={{ base: 2, md: 1 }}
        >
          <Heading fontSize={['md', 'lg', 'xl']} p={2}>
            Welcome to our online perfume and cosmetics store
          </Heading>
          <Button>Shop Now!</Button>
        </Box>
        <Box order={{ base: 1, md: 2 }}>
          <Image src={imgBanner} maxH={{ base: '15vh', md: '50vh' }} />
        </Box>
      </Box>
    </Stack>
  )
}
