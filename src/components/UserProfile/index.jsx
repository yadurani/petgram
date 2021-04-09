import React from 'react'
import { useStateValue } from '../../context/AppContext'
import SubmitButton from '../SubmitButton'
import { Title, WrapperProfile } from './styles'

const UserProfile = () => {
  const { removeAuth } = useStateValue()
  return (
    <WrapperProfile>
      <Title>¡Bienvenido!</Title>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </WrapperProfile>
  )
}

export default UserProfile
