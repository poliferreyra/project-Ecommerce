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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Portal,
  Hide,
  Show,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { BiHide, BiUser } from 'react-icons/bi'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { BurgerMenu } from './BurgerMenu'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)
  return (
    <>
      <Flex alignItems="center" p={5} fontWeight="bold">
        <Heading mr={3}>EShop</Heading>
        {/* links de home & product */}
        <Show breakpoint="(max-width: 500px)">
          <Stack direction="row" align="center" fontWeight="bold" mr={3}>
            <BurgerMenu />
          </Stack>
        </Show>
        <Show above="sm">
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
        </Show>
        <Spacer />
        {/* links de login & cart */}
        <Stack direction="row" spacing={2}>
          {user ? (
            <Menu>
              <Text color="#F29101">Hi! {user}</Text>
              <MenuButton
                bg="#F29101"
                color="white"
                _hover={{
                  fontWeight: 'semibold',
                  color: '#282445',
                }}
                as={Button}
              >
                <Icon as={BiUser} />
              </MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem>My orders</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          ) : (
            <Button
              bg="#F29101"
              color="white"
              fontWeight="bold"
              size={{ base: 'sm', md: 'md' }}
            >
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
          )}

          <IconButton
            bg="#F29101"
            color="white"
            size={{ base: 'sm', md: 'md' }}
          >
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
