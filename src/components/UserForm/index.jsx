import React from 'react'
import PropTypes from 'prop-types'
import useInputValue from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import SubmitButton from '../SubmitButton'

const UserForm = ({ onSubmit, title, error, disabled }) => {
  const { values, onChange } = useInputValue()
  const { email, password } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <>
      <Title>{title}</Title>
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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default UserForm
