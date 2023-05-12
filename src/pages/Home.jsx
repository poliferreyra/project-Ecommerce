import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import imgTienda from '../assets/imgTienda.png'

export const Home = () => {
  return (
    <>
      <Flex justifyContent="center" bg="#F6E3D3" mt={2}>
        <Box maxW="40%" maxH="50%" m={3}>
          <Image
            objectFit="cover"
            borderRadius="10px"
            src={imgTienda}
            alt="imgHome"
          />
        </Box>
      </Flex>
      <Box p={3}>
        <Heading>Recently visited</Heading>
      </Box>
      <Card maxW="35%" alignItems="start">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <ButtonGroup m={2}>
          <Button size="sm" variant="solid" colorScheme="blue">
            See detail
          </Button>
          <Button size="sm" variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </Card>
    </>
  )
}
