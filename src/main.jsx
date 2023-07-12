import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

import '@fontsource/fredoka-one/400.css'
import '@fontsource/varela-round/400.css'

import myNewThemes from './components/themes/themes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ChakraProvider theme={myNewThemes}>
          <CartProvider>
            <App />
          </CartProvider>
        </ChakraProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
