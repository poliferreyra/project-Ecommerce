import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'fredoka one', sans-serif`,
    body: `'varela round', sans-serif`,
  },

  brandColors: {
    primary: '#27C4BF',
    second: '#F5CF03',
    text: '#643FE6',
  },
})

export default theme
