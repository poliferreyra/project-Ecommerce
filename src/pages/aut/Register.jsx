/* eslint-disable react/no-unescaped-entities */
import {
  // Center,
  // FormControl,
  // FormLabel,
  // VStack,
  // Input,
  // Heading,
  // Text,
  // ButtonGroup,
  // Button,
  // Avatar,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'

import { FaEyeSlash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import { useContext, useState } from 'react'
import { registerAccount } from '../../services/auth'
import { useNavigate } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { UserContext } from '../../context/UserContext'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'

const Register = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [showPassword, setShowPassword] = useState(false)
  const toggleEyeSlash = () => setShowPassword(!showPassword)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const createAccont = async (data) => {
    try {
      const user = await registerAccount(data)
      toast({
        title: 'Account created',
        description: 'Account created successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      navigate('/')
    } catch (error) {
      const errorMessage = error.message
      console.log(errorMessage)
    }
    console.log(data)
    // alert('paso la validacion')
  }

  return (
    <>
      <Stack alignItems="center">
        <Button
          alignSelf="flex-start"
          as={NavLink}
          to="/"
          m={5}
          _hover={{
            fontWeight: 'semibold',
            color: '#F29101',
          }}
        >
          Return Home
        </Button>
        <Heading mb={2}>Register Account</Heading>
        <Button
          leftIcon={<FcGoogle />}
          mt={4}
          minW="40%"
          color="#282445"
          _hover={{
            fontWeight: 'semibold',
            color: '#F29101',
          }}
          type="submit"
        >
          Login with Google
        </Button>

        <Box as="form" onSubmit={handleSubmit(createAccont)} minW="40%">
          <FormControl isInvalid={errors.email} mt={2}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              {...register('email', {
                required: 'This field is required',
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
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 6,
                    message: 'The minimum of characters is 6',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  onClick={toggleEyeSlash}
                  variant="link"
                  color="#282445"
                  aria-label="EyeSlash"
                  icon={showPassword ? <BsEye /> : <FaEyeSlash />}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password?.message}
            </FormErrorMessage>
          </FormControl>
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
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default Register
