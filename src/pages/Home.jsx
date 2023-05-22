import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Stack bg="#9DE8F3" w="100%" minH="800px">
        <Box p={6}>
          <SimpleGrid columns={2} spacing={10}>
            <Box maxW="600px" minH="300" textAlign="center" p={10} mt={5}>
              <Heading size="sm" p={10} color="#282445">
                Welcome to our online perfume and cosmetics store! <br />
                Discover a wide variety of high-quality products to enhance your
                natural beauty and highlight your personal style.
              </Heading>
              <Link
                p={3}
                bg="#F29101"
                color="white"
                borderRadius="10px"
                fontWeight="semibold"
                as={NavLink}
                to="/aboutUs"
                _hover={{
                  color: '#282445',
                }}
              >
                About us
              </Link>
            </Box>
            <Box maxW="800px" maxH="600">
              <Image
                objectFit="cover"
                boxSize="400px"
                borderRadius="10px"
                src=""
                alt="imgHome"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Divider />
        <SimpleGrid>
          <Stack maxW="200px" maxH="150px" m={3}>
            <Heading size="md">Recently Visited</Heading>
            <Card maxW="md">
              <CardBody>
                <Text>Product 1</Text>
              </CardBody>
              <Image
                objectFit="cover"
                p={3}
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Buy Latte
                </Button>
              </CardFooter>
            </Card>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  )
}
