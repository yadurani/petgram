import React from 'react'
import { Redirect, Router } from '@reach/router'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { useStateValue } from '../context/AppContext'
import NotFound from '../pages/NotFound'
import NotRegisteredUser from '../pages/NotRegisteredUser'
// import Favs from '../pages/Favs'
import User from '../pages/User'

const Favs = React.lazy(() => import('../pages/Favs'))

const Routes = () => {
  const { isAuth } = useStateValue()
  return (
    <>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </>
  )
}

export default Routes
