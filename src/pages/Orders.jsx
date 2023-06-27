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
} from '@chakra-ui/react'

import { getOrdersbyUid } from '../services/orders'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const Orders = () => {
  const { uid, user } = useContext(UserContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [orders, setOrders] = useState([])
  console.log(orders)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersUid = await getOrdersbyUid(uid)
        setLoading(false)
        setOrders(ordersUid)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getOrders()
  }, [uid])

  const findDoc = (id) => {
    const orderID = orders.find((o) => o.id === id)
    console.log(orderID)
  }
  findDoc('0GZglcq4uzGO3HKM2fPC')
  return (
    <>
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
              onClick={onOpen}
            >
              See Detail
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Order Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>Here the detail will be shown</Box>
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
