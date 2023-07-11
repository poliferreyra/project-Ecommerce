import {
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

      <Stack>
        <Banner />
        <VStack justifyContent="center" alignItems="center">
          <Slider />
        </VStack>
        {loading && (
          <HStack justifyContent="center">
            <Spinner />
          </HStack>
        )}
      </Stack>
    </>
  )
}
