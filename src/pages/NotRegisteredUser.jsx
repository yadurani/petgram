import React from 'react'
import UserForm from '../components/UserForm'
import { useStateValue } from '../context/AppContext'
import useMutationRegister from '../hooks/useMutationRegister'
import useMutationSignIn from '../hooks/useMutationSignIn'

const NotRegisteredUser = () => {
  const { register, loading, error } = useMutationRegister()
  const { login, loading: loadingSignIn, error: errorSignIn } = useMutationSignIn()
  const { activateAuth } = useStateValue()

  const errorMsg = error && 'El usuario ya existe o hay algún problema'
  const errorMsgLogin = errorSignIn && 'La contraseña no es correcta o el usuario no existe'

  const onSubmitRegister = async ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      const { data } = await register({ variables })
      const { signup } = data
      activateAuth(signup)
    } catch (err) {}
  }

  const onSubmitLogin = async ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    try {
      const { data } = await login({ variables })
      activateAuth(data.login)
    } catch (err) {}
  }

  return (
    <div>
      <UserForm
        title='Registrarse'
        onSubmit={onSubmitRegister}
        error={errorMsg}
        disabled={loading}
      />
      <UserForm
        title='Iniciar Sesión'
        onSubmit={onSubmitLogin}
        error={errorMsgLogin}
        disabled={loadingSignIn}
      />
    </div>
  )
}

export default NotRegisteredUser
