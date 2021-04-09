import { navigate } from '@reach/router'
import React from 'react'
import UserForm from '../components/UserForm'
import { useStateValue } from '../context/AppContext'
import useMutationRegister from '../hooks/useMutationRegister'

const Register = () => {
  const { register, loading, error } = useMutationRegister()
  const { activateAuth } = useStateValue()

  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  const onSubmitRegister = async ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      const { data } = await register({ variables })
      const { signup } = data
      activateAuth(signup)
      navigate('/')
    } catch (err) {}
  }

  return (
    <UserForm
      title='Registrarse'
      onSubmit={onSubmitRegister}
      error={errorMsg}
      disabled={loading}
      register
    />
  )
}

export default Register
