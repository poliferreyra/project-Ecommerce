import { Box, IconButton, HStack, Hide, Image, Grid } from '@chakra-ui/react'
import { AiFillDelete } from 'react-icons/ai'

export const CartDetail = () => {
  return (
    <Grid
      Columns={{ base: '1', md: '3' }}
      gap={4}
      border="solid 1px gray"
      mt={6}
      maxW="50%"
    >
      Product name
      <IconButton size={{ base: 'sm', md: 'md' }} w="80px" bg="tomato" m={2}>
        <AiFillDelete color="white" />
      </IconButton>
      <HStack
        maxW="500px"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image
            objectFit="contain"
            objectPosition="center"
            w="100%"
            h="100%"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Hide below="md">
          <Box minW="30%" h="130px">
            Quantity
          </Box>
        </Hide>
        <Box minW="30%" h="130px">
          Total
        </Box>
      </HStack>
    </Grid>
  )
}
