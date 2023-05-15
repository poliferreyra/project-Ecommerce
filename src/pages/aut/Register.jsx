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
import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../firebase/config'
import { auth } from '../../firebase/config'

const Register = () => {
  const [values, setValues] = useState({
    password: '',
    email: '',
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const createAccount = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
      })
  }
  return (
    // <Center
    //   paddingTop={5}
    //   backgroundImage="src/assets/Free Vector _ Decorative background with an elegant gold border.jpeg"
    //   backgroundSize="cover"
    //   onSubmit={createCount}
    //   as="form"
    //   gap="4"
    //   flexDirection="column"
    //   minHeight="100vh"
    //   // bg="black"
    //   color="yellow.400"
    // >
    //   <Heading>Welcome to Arian</Heading>
    //   <Avatar size="2xl" name="logo resto" src="./src/assets/favicon.png" />

    //   <Text>Please you must create an account to continue!</Text>
    //   <VStack>
    //     <FormControl isRequired>
    //       <FormLabel>E-mail</FormLabel>
    //       <Input
    //         onChange={handleChange}
    //         value={values.email}
    //         name="email"
    //         placeholder="Email"
    //       />
    //     </FormControl>
    //     <FormControl isRequired>
    //       <FormLabel>Password</FormLabel>
    //       <Input
    //         type="password"
    //         onChange={handleChange}
    //         value={values.password}
    //         name="password"
    //         placeholder="Password"
    //       />
    //     </FormControl>
    //     <ButtonGroup>
    //       <Button type="submit" colorScheme="yellow">
    //         Create Account
    //       </Button>
    //       <Button colorScheme="red">Go out</Button>
    //     </ButtonGroup>
    //   </VStack>
    // </Center>

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
