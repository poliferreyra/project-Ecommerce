import { extendTheme } from '@chakra-ui/react'

const myNewThemes = extendTheme({
  fonts: {
    heading: `'barlow semi condensed', sans-serif`,
    body: `'varela round', sans-serif`,
  },

  colors: {
    primary: '#27C4BF',
    secondary: '#F5E90C',
    text: '#4B4B4B',
    body: '#F5F5F5',
  },
})

export default myNewThemes
