import { EmailIcon } from '@chakra-ui/icons'
import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { Flex, Stack, AvatarGroup, Avatar, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" p={6}>
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
          <Link
            p={2}
            as={NavLink}
            to="/about"
            _hover={{
              fontWeight: 'semibold',
              color: '#F29101',
            }}
          >
            About us
          </Link>
        </Stack>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Stack direction="row" spacing="20px">
          <AvatarGroup spacing="1rem">
            <Avatar bg="#F29101" icon={<FiTwitter fontSize="1.5rem" />} />
            <Avatar bg="#F29101" icon={<FiInstagram fontSize="1.5rem" />} />
            <Avatar bg="#F29101" icon={<EmailIcon fontSize="1.5rem" />} />
          </AvatarGroup>
        </Stack>
      </Flex>
    </>
  )
}
