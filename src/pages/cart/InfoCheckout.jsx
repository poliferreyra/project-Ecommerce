import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useContext } from 'react'

import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
import { createOrders } from '../../services/products'

export const InfoCheckout = () => {
  const toast = useToast()
  const { user } = useContext(UserContext)
  const { emptyCart, cartTotalPrice, cart } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    await createOrders({
      user: { ...data, uid: user.uid },
      products: cart,
      totPrice: cartTotalPrice(),
    })
    toast({
      title: 'Checkout',
      description: 'Your order was successful',
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    emptyCart()
  }
  return (
    <>
      <Stack alignItems="center">
        <Heading mb={2}>Information Checkout</Heading>

        <Box as="form" onSubmit={handleSubmit(onSubmit)} minW="60%">
          <FormControl isInvalid={errors.name}>
            <FormLabel p={2}>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Type you name"
              {...register('name', {
                required: 'This field is required',
                minLength: {
                  value: 4,
                  message: 'The minimum of characters is 4',
                },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email} mt={2}>
            <FormLabel p={2}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              defaultValue={user.email}
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'This email is not valid',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.address}>
            <FormLabel p={2}>Address</FormLabel>
            <Input
              type="text"
              name="address"
              defaultValue=""
              placeholder="Type you address"
              {...register('address', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'The minimum of characters is 6',
                },
              })}
            />
            <FormErrorMessage>
              {errors.address && errors.address?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.state}>
            <FormLabel p={2}>State</FormLabel>
            <Input
              type="text"
              name="state"
              defaultValue=""
              placeholder="Type you state"
              {...register('state', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'The minimum of characters is 6',
                },
              })}
            />
            <FormErrorMessage>
              {errors.state && errors.state?.message}
            </FormErrorMessage>
          </FormControl>
          <Box h="40px" p={3}>
            <Heading fontSize="2xl" p={2}>
              Total : $ {cartTotalPrice()}
            </Heading>
          </Box>
          <Stack direction="column">
            <Button
              mt={4}
              bg="#F5E90C"
              color="#282445"
              fontWeight="bold"
              _hover={{
                fontWeight: 'semibold',
                color: '#DF166D',
              }}
              type="submit"
            >
              Pay
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
