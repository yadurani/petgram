import React, { Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import Routes from './routes/Routes'

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Routes />
      <NavBar />
    </Suspense>
  )
}

export default App
