import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { TbBrandProducthunt } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

export const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem
          icon={<AiOutlineHome />}
          p={2}
          as={NavLink}
          to="/"
          _hover={{
            fontWeight: 'semibold',
            color: '#F29101',
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
            color: '#F29101',
          }}
        >
          Products
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
