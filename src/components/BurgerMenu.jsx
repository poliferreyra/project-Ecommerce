import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Portal,
} from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { TbBrandProducthunt } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        bg="secondary"
        color="text"
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <Portal>
        <MenuList>
          <MenuItem
            icon={<AiOutlineHome />}
            p={2}
            as={NavLink}
            to="/"
            _hover={{
              fontWeight: 'semibold',
              color: 'text',
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<TbBrandProducthunt />}
            p={2}
            as={NavLink}
            to="/products"
            _hover={{
              fontWeight: 'semibold',
              color: 'text',
            }}
          >
            Products
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}
