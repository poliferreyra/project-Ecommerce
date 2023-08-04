import { Box, Container, Text } from '@chakra-ui/react'

export const AboutUs = () => {
  return (
    <Container align="justify" maxW="container.sm">
      <Box w="100%" h="60vh">
        <Text fontSize={['sm', 'md', 'lg']} p={2} color="text">
          We are a team passionate about beauty. We work closely with trusted
          suppliers to ensure that each item we offer meets the highest quality
          standards. <br />
          <br />
          At our ecommerce, we value customer satisfaction above all else. We
          are committed to guaranteeing your full satisfaction with every
          purchase you make with us. If you have any questions, concerns or need
          advice, our customer service team will be happy to help you at any
          time.
        </Text>
        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Text as="i" textAlign="center" color="text">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Beauty begins when you decide to be YOURSELF"
          </Text>
        </Box>
      </Box>
    </Container>
  )
}
