import { Flex, Stack } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const AppLayout = ({ children }) => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Stack flex="1">{children}</Stack>
      <Footer />
    </Flex>
  )
}
