/* eslint-disable react/no-unescaped-entities */
import { Flex, Image, Text, Stack } from '@chakra-ui/react'
import error404 from '../assets/error404.jpg'

export const NotFound = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Stack>
        <Image
          src={error404}
          alt="Error 404. Not Found"
          borderRadius="lg"
          boxSize="500px"
        />
        <Text textAlign="center" color="tomato">
          Sorry, the page you're searching for doesn't exist
        </Text>
      </Stack>
    </Flex>
  )
}
