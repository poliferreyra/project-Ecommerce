import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import glamourXpressions from '../assets/glamourXpressions.png'

export const AboutUs = () => {
  return (
    <Stack align="center">
      <Box w="100%" h="60vh">
        <Heading fontSize={['sm', 'md', 'lg']} p={2} color="black">
          We are a team passionate about beauty. We work closely with trusted
          suppliers to ensure that each item we offer meets the highest quality
          standards. <br />
          <br />
          At our ecommerce, we value customer satisfaction above all else. We
          are committed to guaranteeing your full satisfaction with every
          purchase you make with us. If you have any questions, concerns or need
          advice, our customer service team will be happy to help you at any
          time.
        </Heading>
        <Box w="100%" display="flex" flexDirection="column" alignItems="center">
          <Image
            w={{ base: '50%', md: '50%', lg: '30%' }}
            src={glamourXpressions}
            alt="Home Imgage"
          />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Text as="i" textAlign="center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Beauty begins when you decide to be YOURSELF"
          </Text>
        </Box>
      </Box>
    </Stack>
  )
}
