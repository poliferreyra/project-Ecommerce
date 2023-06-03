import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Button,
  Stack,
  Container,
  Tag,
  List,
  ListItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const Orders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const name = 'Poli'
  const email = 'poli@gmail.com'
  const address = 'Estrada xxxx'
  const state = 'Buenos Aires'
  const total = '$10000'
  return (
    <>
      <VStack justifyContent="center">
        <Heading>User Name</Heading> <Text>poli@gmail.com</Text>
      </VStack>
      <Container>
        <Tag w="50px" bg="green.200">
          Payed
        </Tag>
        <Text fontWeight="bold">cG0m79k718cAuBdXkMYB</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={2}>
          <Box maxW="sm">
            <Stack mt="6" spacing="3">
              <List>
                <ListItem>
                  Name: <strong>{name}</strong>
                </ListItem>
                <ListItem>
                  Email: <strong>{email}</strong>
                </ListItem>
                <ListItem>
                  Address: <strong>{address}</strong>
                </ListItem>
                <ListItem>
                  State: <strong>{state}</strong>
                </ListItem>
                <ListItem>
                  Total: <strong>{total}</strong>
                </ListItem>
              </List>
            </Stack>

            <Box>
              <Button onClick={onOpen}>Open Modal</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>dkfjakfjakjagkljagklaj</ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button
                size="sm"
                variant="solid"
                bg="#A2EAF4"
                _hover={{
                  fontWeight: 'semibold',
                  color: '#DF166D',
                }}
              >
                See detail
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
