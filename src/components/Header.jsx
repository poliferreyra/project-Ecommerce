import { Flex, Heading, Link, Icon, Box, Spacer } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'

export const Header = () => {
  return (
    <Flex alignItems="center" gap={6} color="green" p={6}>
      <Box>
        <Heading>Header</Heading>
      </Box>
      <Box>
        <Link
          p={4}
          as={NavLink}
          to="/"
          _hover={{
            fontWeight: 'semibold',
            color: 'aqua',
          }}
        >
          Home
        </Link>
        <Link
          p={2}
          as={NavLink}
          to="/products"
          _hover={{
            fontWeight: 'semibold',
            color: 'aqua',
          }}
        >
          Products
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link
          p={2}
          as={NavLink}
          to="/login"
          _hover={{
            fontWeight: 'semibold',
            color: 'aqua',
          }}
        >
          Login
        </Link>
        <Link
          p={4}
          as={NavLink}
          to="/cart"
          _hover={{
            fontWeight: 'semibold',
            color: 'aqua',
          }}
        >
          <Icon as={BsCart3} />
        </Link>
      </Box>
    </Flex>
  )
}
