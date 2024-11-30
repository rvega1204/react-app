import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
