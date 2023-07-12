import {
  Link,
  Icon,
  Button,
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Show,
  Text,
  Image,
  HStack,
  Box,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { BurgerMenu } from './BurgerMenu'
import logo from '../assets/logo.png'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)

  return (
    <Stack position="fixed" top={0} left={0} right={0} zIndex={2} bg="white">
      <HStack justifyContent="space-between" mb={3}>
        {/* menu hamburguesa */}
        <Show breakpoint="(max-width: 500px)">
          <Stack direction="row" align="center" fontWeight="bold" p={1} mt={9}>
            <BurgerMenu />
          </Stack>
        </Show>
        {/* Home & productos  */}
        <Show breakpoint="(min-width: 501px)">
          <Stack
            spacing={2}
            direction="row"
            align="center"
            fontWeight="bold"
            mt={9}
          >
            <Link
              p={2}
              as={NavLink}
              to="/"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
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
                color: '#DF166D',
              }}
            >
              Products
            </Link>
          </Stack>
        </Show>

        <Image w={{ base: '15%', md: '10%' }} src={logo} alt="logo" />

        {/* Login & carrito */}
        <Box>
          <Box p={2}>
            {user && (
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                color="#DF166D"
                textTransform="capitalize"
                fontWeight="bold"
              >
                Hi! {user && user.split(/[@.]/).shift()}
              </Text>
            )}
          </Box>
          <HStack>
            {user ? (
              <Menu>
                <MenuButton
                  size={{ base: 'sm', md: 'md' }}
                  bg="#F5E90C"
                  color="#DF166D"
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#DF166D',
                  }}
                  as={Button}
                >
                  <Icon as={BiUser} />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem as={NavLink} to="/orders">
                      My orders
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            ) : (
              <Button
                bg="#F5E90C"
                fontWeight="bold"
                size={{ base: 'sm', md: 'md' }}
              >
                <Link
                  p={2}
                  as={NavLink}
                  to="/login"
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#DF166D',
                  }}
                >
                  Login
                </Link>
              </Button>
            )}
            <Box>
              <IconButton bg="#F5E90C" boxSize={{ base: '8', md: '10' }}>
                <Link
                  p={2}
                  as={NavLink}
                  to="/cart"
                  _hover={{
                    fontWeight: 'semibold',
                    color: '#DF166D',
                  }}
                >
                  <Icon as={BsCart3} />
                </Link>
              </IconButton>
            </Box>
          </HStack>
        </Box>
      </HStack>
    </Stack>
  )
}
