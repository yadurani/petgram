import { useState } from 'react'

const useInputValue = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return { values, onChange }
}

export default useInputValue
