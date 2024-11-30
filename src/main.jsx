// Importing necessary components from React and Chakra UI
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import App from './App.jsx'

// Creating the root element and rendering the application
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Wrapping the application in StrictMode for highlighting potential problems */}
    <ChakraProvider value={defaultSystem}> {/* Providing Chakra UI's default theme system */}
      <App /> {/* Main App component */}
    </ChakraProvider>
  </StrictMode>,
)
