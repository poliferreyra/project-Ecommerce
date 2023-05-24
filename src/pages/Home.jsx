import {
  Box,
  // Button,
  // Card,
  // CardBody,
  // CardFooter,
  // Divider,
  // Text,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Stack bg="#9DE8F3" w="100%" minH="85vh">
        <Box maxH="40vh" p={6}>
          <SimpleGrid columns={2} spacing={10}>
            <Box
              maxW="600px"
              maxH="300"
              textAlign="center"
              p={10}
              mt={5}
              bg="#F29101"
              borderRadius="53% 47% 67% 33% / 44% 46% 54% 56%"
            >
              <Heading size="sm" p={10} color="white">
                Welcome to our online perfume and cosmetics store! <br />
                Discover a wide variety of high-quality products to enhance your
                natural beauty and highlight your personal style.
              </Heading>
              <Link
                p={2}
                color="#282445"
                borderRadius="10px"
                fontWeight="semibold"
                border="1px"
                borderColor="#282445"
                as={NavLink}
                to="/aboutUs"
                _hover={{
                  color: 'white',
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
        {/* <Divider /> */}
        {/* <SimpleGrid>
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
        </SimpleGrid> */}
      </Stack>
    </>
  )
}
