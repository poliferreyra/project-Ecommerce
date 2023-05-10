import { Box, Flex, Image } from '@chakra-ui/react'
import imgHome from '../assets/imgHome.png'

export const Home = () => {
  return (
    <Flex justifyContent="center" minW="100vw" bg="#EC8F3C" mt={10}>
      <Box maxW="60%" maxH="50%" m={3}>
        <Image
          objectFit="cover"
          borderRadius="10px"
          src={imgHome}
          alt="imgHome"
        />
      </Box>
    </Flex>
  )
}
