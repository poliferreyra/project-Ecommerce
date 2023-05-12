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
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaEyeSlash } from 'react-icons/fa'

export const Login = () => {
  return (
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
      <Box minW="40%">
        <FormControl mt={2}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
        </FormControl>
        <InputGroup>
          <Input />
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
            Login
          </Button>
          <Button color="#282445" variant="link">
            <Heading lineHeight="tall" as="h5" size="sm">
              <Highlight query="Sign Up" styles={{ color: 'tomato' }}>
                Don't have an account? Sign up
              </Highlight>
            </Heading>
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}
