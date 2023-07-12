import { extendTheme } from '@chakra-ui/react'

const myNewThemes = extendTheme({
  fonts: {
    heading: `'fredoka one', sans-serif`,
    body: `'varela round', sans-serif`,
  },

  colors: {
    primary: '#27C4BF',
    secondary: '#F5E90C',
    text: '#643FE6',
    body: '#F5F5F5',
  },
})

export default myNewThemes
