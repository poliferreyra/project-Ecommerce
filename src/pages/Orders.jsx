/* eslint-disable no-undef */
import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Box,
  Button,
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
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner,
  Image,
} from '@chakra-ui/react'

import { getOrdersbyUid } from '../services/orders'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const Orders = () => {
  const { uid, user } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [prodOrderId, setProdOrderId] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersUid = await getOrdersbyUid(uid)
        setLoading(false)
        setOrders(ordersUid)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getOrders()
  }, [uid])

  const findDoc = (id) => {
    onOpen()
    const findOrder = orders.find((o) => o.id === id)
    setProdOrderId(findOrder.products)
  }

  return (
    <>
      {loading && (
        <HStack justifyContent="center">
          <Spinner />
        </HStack>
      )}
      <VStack justifyContent="center">
        <Heading>Customer Email</Heading> <Text>{user}</Text>
      </VStack>

      <Box p={4}>
        <Text as="u">Custumer ID:</Text>
        <Text fontWeight="bold">{uid}</Text>
      </Box>
      {!orders.length && !loading && (
        <HStack justifyContent="center">
          <Alert w="400px" status="error">
            <AlertIcon />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <AlertTitle>There're not orders for this customer</AlertTitle>
          </Alert>
        </HStack>
      )}
      {error && (
        <>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Oops! an error happended</AlertTitle>
          </Alert>
        </>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {orders.map((o) => (
          <Box key={o.id} mt="1" p={4}>
            <List>
              <Tag w="50px" bg="yellow.200">
                Payed
              </Tag>
              <ListItem>
                Name: <strong>{o.user.name}</strong>
              </ListItem>
              <ListItem>
                Email: <strong>{o.user.email}</strong>
              </ListItem>
              <ListItem>
                Address: <strong>{o.user.address}</strong>
              </ListItem>
              <ListItem>
                State: <strong>{o.user.state}</strong>
              </ListItem>
              <ListItem>
                Total: <strong>{o.totPrice}</strong>
              </ListItem>
            </List>

            <Button
              size="sm"
              variant="solid"
              bg="#A2EAF4"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
              }}
              onClick={() => {
                findDoc(o.id)
              }}
            >
              Products detail
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Order Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <SimpleGrid
                    spacing={4}
                    columns={{ base: 1, md: 2, lg: 3 }}
                    minmax="150px, 1fr"
                  >
                    {prodOrderId.map((p) => (
                      <VStack
                        key={p.id}
                        textAlign="center"
                        boxShadow="-5px 3px 12px 0px rgba(201,201,201,0.75)"
                      >
                        <Box
                          height="100%"
                          w={{ base: '100%', md: '60%' }}
                          display="flex"
                          justifyContent="center"
                          mt={4}
                        >
                          <Image
                            objectFit="cover"
                            objectPosition="center"
                            boxSize="100px"
                            maxW="100%"
                            maxH="100%"
                            src={p.img}
                            alt="Product Image"
                          />
                        </Box>
                        <Text
                          colorScheme="teal"
                          size="sm"
                          fontWeight="bold"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          {p.prodName}
                        </Text>
                        <Text
                          colorScheme="teal"
                          size="sm"
                          fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                          X {p.quantity} $ {p.quantity * p.price}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </ModalBody>
                <ModalFooter>
                  <Button
                    size="sm"
                    variant="solid"
                    bg="#A2EAF4"
                    _hover={{
                      fontWeight: 'semibold',
                      color: '#DF166D',
                    }}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}
