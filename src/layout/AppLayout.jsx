import { Flex, Stack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Stack flex="1">
        <Outlet />
      </Stack>
      <Footer />
    </Flex>
  )
}
