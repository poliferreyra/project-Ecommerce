import {
  Stack,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  Box,
  Heading,
} from '@chakra-ui/react'

/* eslint-disable react/no-unescaped-entities */
import { useGetProducts } from '../hook/useGetProducts'

import { Banner } from '../components/Banner'

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
      <Box bg="primary" w="100%">
        <Heading
          ml={3}
          size="xl"
          color="secondary"
          lineHeight="80px"
          textAlign="center"
        >
          New Arrivals
        </Heading>
      </Box>
      <Stack>
        <Banner />
        <VStack justifyContent="center" alignItems="center"></VStack>
        {loading && (
          <HStack justifyContent="center">
            <Spinner />
          </HStack>
        )}
      </Stack>
    </>
  )
}
