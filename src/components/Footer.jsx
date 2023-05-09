import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Flex, Heading, Stack, AvatarGroup, Avatar } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      m={6}
      color="red.500"
    >
      <Heading>Footer</Heading>
      <Heading as="h6" size="xs">
        Made by Poli Ferreyra
      </Heading>
      <Stack direction="row" spacing="20px">
        <AvatarGroup spacing="1rem">
          <Avatar bg="red.500" icon={<EmailIcon fontSize="1.5rem" />} />
          <Avatar bg="red.500" icon={<PhoneIcon fontSize="1.5rem" />} />
        </AvatarGroup>
      </Stack>
    </Flex>
  )
}
