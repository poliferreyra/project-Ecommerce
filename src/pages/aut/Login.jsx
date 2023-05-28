/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Highlight,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaEyeSlash } from 'react-icons/fa'
import { BsEye } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { loginWithEmail } from '../../services/auth'
import { UserContext } from '../../context/UserContext'

export const Login = () => {
  const navigate = useNavigate()
  const { handleLogin } = useContext(UserContext)
  const [showPassword, setShowPassword] = useState(false)
  const toggleEyeSlash = () => setShowPassword(!showPassword)
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const user = await loginWithEmail(data)
      handleLogin(user)
      toast({
        title: 'Login',
        description: 'Your login was successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      navigate('/')
    } catch (error) {
      const errorMessage = error.message
      console.log(errorMessage)
    }
    // console.log(data)
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
        <Heading mb={2}>Login</Heading>
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
        <Box as="form" onSubmit={handleSubmit(onSubmit)} minW="40%">
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
              Login
            </Button>
            <Button as={NavLink} to="/register" color="#282445" variant="link">
              <Heading lineHeight="tall" as="h5" size="sm">
                <Highlight query="Sign Up" styles={{ color: 'tomato' }}>
                  Don't have an account? Sign up
                </Highlight>
              </Heading>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}
