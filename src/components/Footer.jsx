import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

import { Flex, Stack, Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      {/* Links */}
      <Flex justifyContent="center" alignItems="center" p={2}>
        <Stack spacing={4} direction="row" align="center" fontWeight="bold">
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
            Shop
          </Link>
          <Link
            color="text"
            p={2}
            as={NavLink}
            to="/aboutUs"
            _hover={{
              fontWeight: 'semibold',
              color: 'primary',
            }}
          >
            About us
          </Link>
        </Stack>
      </Flex>
      {/* avatars */}
      <Flex justifyContent="center" alignItems="center" p={2}>
        <Stack direction="row" spacing="20px">
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="primary"
            w={12}
            h={12}
            color="white"
            href="https://twitter.com/?lang=es"
            isExternal
            _hover={{
              fontWeight: 'semibold',
              color: 'secondary',
            }}
          >
            <FiTwitter size="25px" />
          </Link>
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="primary"
            w={12}
            h={12}
            color="white"
            href="https://www.instagram.com/"
            isExternal
            _hover={{
              fontWeight: 'semibold',
              color: 'secondary',
            }}
          >
            <FiInstagram size="25px" />
          </Link>
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            bg="primary"
            w={12}
            h={12}
            color="white"
            href="mailto:email@gmail.com"
            isExternal
            _hover={{
              fontWeight: 'semibold',
              color: 'secondary',
            }}
          >
            <AiOutlineMail size="25px" />
          </Link>
        </Stack>
      </Flex>
    </>
  )
}
