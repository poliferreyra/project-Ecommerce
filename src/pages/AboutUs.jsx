import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const AboutUs = () => {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minH="700px"
        maxW="60%"
        color="#282445"
        bg="#9DE8F3"
        fontWeight="semibold"
        p={10}
        borderRadius="10px"
      >
        <Heading mt={4} size="xl">
          Welcome to our e-commerce!
        </Heading>
        <Text fontSize="lg" p={5} textAlign="center">
          We are a team passionate about beauty and we are pleased to present
          you with a wide selection of high-quality products that will help you
          bring out your unique beauty.
          <br />
          <br />
          Our goal is to help you find the perfect perfume that reflects your
          personality and style, as well as cosmetic products that enhance your
          natural beauty. We work closely with trusted suppliers to ensure that
          each item we offer meets the highest quality standards.
          <br />
          <br />
          At our ecommerce, we value customer satisfaction above all else. We
          are committed to guaranteeing your full satisfaction with every
          purchase you make with us. If you have any questions, concerns or need
          advice, our customer service team will be happy to help you at any
          time.
        </Text>
      </Box>
    </Flex>
  )
}