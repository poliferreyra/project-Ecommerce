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

import { useState } from 'react'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase/config'
// import { auth } from '../../firebase/config'
import { register } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    password: '',
    email: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const createAccount = async (e) => {
    e.preventDefault()
    const user = await register(values)
    navigate('/')
    console.log(user)
    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     values.email,
    //     values.password
    //   )
    //   // email y uid cuando creo la cuenta
    //   const uid = userCredential.user.uid
    //   const userEmail = userCredential.user.email
    //   console.log(userEmail)
    //   console.log(uid)
    // } catch (error) {
    //   const errorCode = error.code
    //   const errorMessage = error.message
    //   console.log(errorCode)
    //   console.log(errorMessage)
    // }
    // createUserWithEmailAndPassword(auth, values.email, values.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user
    //     console.log(user)
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //     console.log(errorCode)
    //     console.log(errorMessage)
    //   })
  }
  return (
    <Stack alignItems="center">
      <Heading mb={2}>Hello!</Heading>
      <Heading as="h5" size="sm" mb={2}>
        Please enter the required information below
      </Heading>

      <Box as="form" onSubmit={createAccount} minW="40%">
        <FormControl mt={2}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
        </FormControl>
        <InputGroup>
          <Input type="password" name="password" onChange={handleChange} />
          <InputRightElement>
            <IconButton
              variant="link"
              color="#282445"
              aria-label="EyeSlash"
              icon={<FaEyeSlash />}
            />
          </InputRightElement>
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
            Create Account
          </Button>
          <Button
            as={NavLink}
            to="/"
            m={5}
            fontWeight="bold"
            _hover={{
              fontWeight: 'semibold',
              color: '#F29101',
            }}
          >
            Return Home
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Register
