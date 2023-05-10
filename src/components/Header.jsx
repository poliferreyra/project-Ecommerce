import {
  Flex,
  Heading,
  Link,
  Icon,
  Spacer,
  Button,
  Stack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'

export const Header = () => {
  return (
    <Flex alignItems="center" p={6} fontWeights="bold">
      <Heading mr={8}>EShop</Heading>
      <Stack spacing={4} direction="row" align="center" fontWeight="bold">
        <Link
          p={4}
          as={NavLink}
          to="/"
          _hover={{
            fontWeight: 'semibold',
            color: '#F29101',
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
            color: '#F29101',
          }}
        >
          Shop
        </Link>
      </Stack>
      <Spacer />
      <Stack direction="row" spacing={4}>
        <Button bg="#F29101" color="white" fontWeight="bold">
          <Link
            p={2}
            as={NavLink}
            to="/login"
            _hover={{
              fontWeight: 'semibold',
              color: '#282445',
            }}
          >
            Login
          </Link>
        </Button>
        <Button bg="#F29101" color="white">
          <Link
            p={4}
            as={NavLink}
            to="/cart"
            _hover={{
              fontWeight: 'semibold',
              color: '#282445',
            }}
          >
            <Icon as={BsCart3} />
          </Link>
        </Button>
      </Stack>
    </Flex>
  )
}
