import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/NavBar'
import Routes from './routes/Routes'
import theme from './constants/theme'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
        <NavBar />
      </ThemeProvider>
    </Suspense>
  )
}

export default App
