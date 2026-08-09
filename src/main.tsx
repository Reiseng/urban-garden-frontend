import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './app'
// @ts-ignore: ThemeContext is a JS module without type declarations
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
     </BrowserRouter>
  </StrictMode>,
)
