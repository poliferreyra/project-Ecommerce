import {
  Flex,
  Link,
  Icon,
  Spacer,
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
  Box,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { BurgerMenu } from './BurgerMenu'
import glamourXpressions from '../assets/glamourXpressions.png'

export const Header = () => {
  const { user, handleLogout } = useContext(UserContext)

  return (
    <Stack>
      <Box
        w="100%"
        bg="#F5E90C"
        ml={4}
        display="flex"
        justifyContent="center"
        borderRadius="29% 71% 23% 77% / 77% 28% 72% 23%"
      >
        <Image
          w={{ base: '60%', md: '30%' }}
          src={glamourXpressions}
          alt="Home Imgage"
        />
      </Box>
      <Flex alignItems="center" p={5} fontWeight="bold">
        {/* links de home & product */}
        <Show breakpoint="(max-width: 500px)">
          <Stack direction="row" align="center" fontWeight="bold" ml={2}>
            <BurgerMenu />
          </Stack>
        </Show>
        <Show breakpoint="(min-width: 501px)">
          <Stack
            spacing={2}
            direction="row"
            align="center"
            fontWeight="bold"
            ml={5}
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
        <Spacer />
        {/* links de login & cart */}

        <Stack direction="row" spacing={2} mr={2}>
          {user ? (
            <Menu>
              <Text color="#DF166D" textTransform="capitalize" mt={3}>
                Hi! {user && user.split('@').shift()}
              </Text>
              <MenuButton
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
                  <MenuItem>My orders</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          ) : (
            <Button bg="#F5E90C" fontWeight="bold">
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

          <IconButton bg="#F5E90C">
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
        </Stack>
      </Flex>
    </Stack>
  )
}
