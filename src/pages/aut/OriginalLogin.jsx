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

import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { useForm } from 'react-hook-form'

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('example'))
  const navigate = useNavigate()
  const [values, setValues] = useState({
    password: '',
    email: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const [showPassword, setShowPassword] = useState(false)
  const toggleEyeSlash = () => setShowPassword(!showPassword)

  const userLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      // email y uid cuando me logueo
      const uid = userCredential.user.uid
      // const userEmail = userCredential.user.email
      // console.log(userEmail)
      // console.log(uid)
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    }
    // navigate('/')
  }
  return (
    <>
      <Button
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
      <Stack alignItems="center">
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
        <Box as="form" onSubmit={userLogin} minW="40%">
          <FormControl mt={2}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
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
          <FormControl>
            <FormLabel>Password</FormLabel>
          </FormControl>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={handleChange}
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
            <FormErrorMessage>
              {errors.password && errors.password?.message}
            </FormErrorMessage>
          </InputGroup>
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
