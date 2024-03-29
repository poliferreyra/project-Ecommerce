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
    <Stack bg="body">
      <HStack justifyContent="space-between" mb={1}>
        {/* menu hamburguesa */}
        <Show breakpoint="(max-width: 500px)">
          <Stack direction="row" align="center" fontWeight="bold" p={1} mt={5}>
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
            mt={5}
          >
            <Link
              color="text"
              p={2}
              as={NavLink}
              to="/"
              _hover={{
                fontWeight: 'semibold',
                color: 'primary',
              }}
            >
              Home
            </Link>
            <Link
              color="text"
              p={2}
              as={NavLink}
              to="/products"
              _hover={{
                fontWeight: 'semibold',
                color: 'primary',
              }}
            >
              Products
            </Link>
          </Stack>
        </Show>

        <Image w={{ base: '35%', md: '20%' }} src={logo} alt="logo" />

        {/* Login & carrito */}
        <Box>
          <Box p={2}>
            {user && (
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                align="center"
                color="primary"
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
                  border="1px solid #F5F5F5"
                  color="primary"
                  _hover={{
                    fontWeight: 'semibold',
                    color: 'text',
                    bg: '#E2E8F0',
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
                border="1px solid #F5F5F5"
                color="primary"
                fontWeight="bold"
                size={{ base: 'sm', md: 'md' }}
              >
                <Link
                  color="text"
                  p={2}
                  as={NavLink}
                  to="/login"
                  _hover={{
                    fontWeight: 'semibold',
                    color: 'text',
                  }}
                >
                  Login
                </Link>
              </Button>
            )}
            {!user ? (
              <Box>
                <IconButton
                  boxSize={{ base: '8', md: '10' }}
                  border="1px solid #F5F5F5"
                  color="primary"
                >
                  <Link p={2} as={NavLink} to="/login">
                    <Icon
                      as={BsCart3}
                      _hover={{
                        fontWeight: 'semibold',
                        color: 'text',
                      }}
                    />
                  </Link>
                </IconButton>
              </Box>
            ) : (
              <Box>
                <IconButton
                  boxSize={{ base: '8', md: '10' }}
                  border="1px solid #F5F5F5"
                  color="primary"
                >
                  <Link p={2} as={NavLink} to="/cart">
                    <Icon
                      as={BsCart3}
                      _hover={{
                        fontWeight: 'semibold',
                        color: 'text',
                      }}
                    />
                  </Link>
                </IconButton>
              </Box>
            )}
          </HStack>
        </Box>
      </HStack>
    </Stack>
  )
}
