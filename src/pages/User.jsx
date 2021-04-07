import React from 'react'
import SubmitButton from '../components/SubmitButton'
import { useStateValue } from '../context/AppContext'

const User = () => {
  const { removeAuth } = useStateValue()
  return (
    <div>
      user
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </div>
  )
}

export default User
