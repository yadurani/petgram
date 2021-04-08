import React from 'react'
import UserForm from '../components/UserForm'
import { useStateValue } from '../context/AppContext'
import useMutationSignIn from '../hooks/useMutationSignIn'

const NotRegisteredUser = () => {
  const { login, loading: loadingSignIn, error: errorSignIn } = useMutationSignIn()
  const { activateAuth } = useStateValue()

  const errorMsgLogin = errorSignIn && 'La contraseña no es correcta o el usuario no existe'

  const onSubmitLogin = async ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      const { data } = await login({ variables })
      activateAuth(data.login)
    } catch (err) {}
  }

  return (
    <UserForm
      title='Iniciar Sesión'
      onSubmit={onSubmitLogin}
      error={errorMsgLogin}
      disabled={loadingSignIn}
    />
  )
}

export default NotRegisteredUser
