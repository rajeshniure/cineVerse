import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import customTheme from './theme.tsx'
import { BookmarkProvider } from "./context/BookmarkContext";
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
    <BookmarkProvider>
      <SearchProvider>
      <CssBaseline />
    <App />
      </SearchProvider>
    </BookmarkProvider>
    </ThemeProvider>
  </StrictMode>,
)
