import {
  Heading,
  Stack,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
} from '@chakra-ui/react'

/* eslint-disable react/no-unescaped-entities */
import { useGetProducts } from '../hook/useGetProducts'

import { Slider } from '../components/slider/Slider'

export const Home = () => {
  const { loading, error } = useGetProducts()

  return (
    <>
      {error && (
        <HStack justifyContent="center">
          <Alert w="400px" status="error">
            <AlertIcon />
            <AlertTitle>Oops! an error happended</AlertTitle>
          </Alert>
        </HStack>
      )}

      <Stack>
        {/* <HStack>
          <Box w="100%" h="300px" position="relative">
            <Box w="70%" mt={4}>
              <Heading
                as="i"
                size="md"
                p={3}
                color="#DF166D"
                textShadow="0px 2px 4px #A2EAF4, 0px 4px 6px #F5E90C"
              >
                GlamourXpressions
              </Heading>
              <Heading size="sm" p={3} color="black" textAlign="start" mb={3}>
                Welcome to our online perfume and cosmetics store! <br />
                Discover a wide variety of high-quality products to enhance your
                natural beauty and highlight your personal style.
              </Heading>
            </Box>
            <Link
              p={2}
              ml="30px"
              fontWeight="bold"
              color="#DF166D"
              borderRadius="10px"
              bg="#F5E90C"
              as={NavLink}
              to="/aboutUs"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
              }}
            >
              About us
            </Link>
          </Box>
        </HStack> */}
        {loading && (
          <HStack justifyContent="center">
            <Spinner />
          </HStack>
        )}
        <VStack justifyContent="center" alignItems="center">
          <Heading
            ml={3}
            size="xl"
            color="#DF166D"
            // borderRadius="26% 74% 26% 74% / 29% 66% 34% 71% "
            // bg="#F5E90C"

            w="300px"
            h="80px"
            lineHeight="80px"
            textAlign="center"
          >
            New Arrivals
          </Heading>
          <Slider />
        </VStack>
      </Stack>
    </>
  )
}
