import React from 'react'
import ReactDOM from 'react-dom/client'
import {CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = createTheme({
  typography: {
    fontFamily: '"Arial Black"', fontSize: 20
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.primary.dark
        }
      })
    }
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
