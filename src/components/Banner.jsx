import { Box, Heading, Stack, Image, Link } from '@chakra-ui/react'
import imgBanner from '../assets/imgBanner.png'
import { NavLink } from 'react-router-dom'

export const Banner = () => {
  return (
    <Stack bg="#27C4BF">
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
          <Heading fontSize={['sm', 'md', 'lg']} p={2} mb={3}>
            Welcome to our online perfume and cosmetics store. Discover a wide
            variety of high-quality products to enhance your natural beauty and
            highlight your personal style.
          </Heading>
          <Link
            p={2}
            as={NavLink}
            to="/products"
            bg="#F5E90C"
            _hover={{
              fontWeight: 'semibold',
              color: '#DF166D',
            }}
          >
            Shop
          </Link>
        </Box>
        <Box order={{ base: 1, md: 2 }}>
          <Image src={imgBanner} maxH={{ base: '15vh', md: '50vh' }} />
        </Box>
      </Box>
    </Stack>
  )
}
