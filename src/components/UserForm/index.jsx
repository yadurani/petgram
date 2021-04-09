import React from 'react'
import PropTypes from 'prop-types'
import useInputValue from '../../hooks/useInputValue'
import { Form, Input, Error, FormWrapper, P } from './styles'
import SubmitButton from '../SubmitButton'
import Logo from '../Logo'
import { Link } from '@reach/router'

const UserForm = ({ onSubmit, title, error, disabled, login, register }) => {
  const { values, onChange } = useInputValue()
  const { email, password } = values
  const disabledBtn = !email || !password

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <FormWrapper>
      <Logo height={100} path=""/>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          type='email'
          autoComplete='username'
        />
        <Input
          disabled={disabled}
          name='password'
          placeholder='Contraseña'
          value={password}
          onChange={onChange}
          type='password'
          autoComplete='current-password'
        />
        <SubmitButton disabled={disabled || disabledBtn}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
      {login &&
        <P>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></P>
      }
      {register &&
        <P>Ya tengo una cuenta. <Link to="/login">Iniciar sesión</Link></P>
      }
    </FormWrapper>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  login: PropTypes.bool,
  register: PropTypes.bool
}

export default UserForm
