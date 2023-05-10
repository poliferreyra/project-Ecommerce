import { Box, Flex, Image } from '@chakra-ui/react'
import imgTienda from '../assets/imgTienda.png'

export const Home = () => {
  return (
    <Flex justifyContent="center" bg="#F6E3D3" mt={2}>
      <Box maxW="60%" maxH="50%" m={3}>
        <Image
          objectFit="cover"
          borderRadius="10px"
          src={imgTienda}
          alt="imgHome"
        />
      </Box>
    </Flex>
  )
}
