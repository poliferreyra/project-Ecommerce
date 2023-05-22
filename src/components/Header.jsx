import {
  Flex,
  Heading,
  Link,
  Icon,
  Spacer,
  Button,
  Stack,
  IconButton,
  Divider,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)
  return (
    <>
      <Flex alignItems="center" p={6} fontWeight="bold">
        <Heading mr={8}>EShop</Heading>
        <Stack spacing={2} direction="row" align="center" fontWeight="bold">
          <Link
            p={2}
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
            Products
          </Link>
        </Stack>
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Button bg="#F29101" color="white" fontWeight="bold">
            {user ? (
              <IconButton bg="#F29101" color="white">
                <Link
                  p={2}
                  as={NavLink}
                  onClick={handleLogout}
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#282445',
                  }}
                >
                  <Icon as={BiUser} />
                </Link>
              </IconButton>
            ) : (
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
            )}
          </Button>
          {/* <Button bg="#F29101" color="white" fontWeight="bold">
          <Link
            p={2}
            as={NavLink}
            to="/login"
            _hover={{
              fontWeight: 'semibold',
              color: '#282445',
            }}
          >
            {user ? (
              <IconButton bg="#F29101" color="white">
                <Icon
                  as={BiUser}
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#282445',
                  }}
                />
              </IconButton>
            ) : (
              'Login'
            )}
          </Link>
        </Button> */}
          <IconButton bg="#F29101" color="white">
            <Link
              p={2}
              as={NavLink}
              to="/cart"
              _hover={{
                fontWeight: 'semibold',
                color: '#282445',
              }}
            >
              <Icon as={BsCart3} />
            </Link>
          </IconButton>
        </Stack>
      </Flex>
      <Divider />
    </>
  )
}
