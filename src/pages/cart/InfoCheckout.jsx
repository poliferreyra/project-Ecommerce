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

export const InfoCheckout = () => {
  const toast = useToast()
  const { user } = useContext(UserContext)
  const { emptyCart, cartTotalPrice } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = () => {
    toast({
      title: 'Checkout',
      description: 'Your order was successful',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    emptyCart()

    // console.log(data)
    // alert('paso la validacion')
  }
  return (
    <>
      <Stack alignItems="center">
        <Heading mb={2}>Information Checkout</Heading>

        <Box as="form" onSubmit={handleSubmit(onSubmit)} minW="60%">
          <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
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
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              defaultValue={user}
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
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              defaultValue=""
              placeholder="Type you address"
              {...register('address', {
                required: 'This field is required',
                minLength: {
                  value: 10,
                  message: 'The minimum of characters is 10',
                },
              })}
            />
            <FormErrorMessage>
              {errors.address && errors.address?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.state}>
            <FormLabel>State</FormLabel>
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
            <Heading fontSize="2xl">Total : $ {cartTotalPrice()}</Heading>
          </Box>
          <Stack direction="column">
            <Button
              mt={4}
              color="#282445"
              fontWeight="bold"
              _hover={{
                fontWeight: 'semibold',
                color: '#F29101',
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