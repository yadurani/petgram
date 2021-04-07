import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()
export const useStateValue = () => useContext(AppContext)

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.object
}

export default AppProvider
