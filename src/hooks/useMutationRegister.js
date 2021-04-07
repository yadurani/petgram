import { useMutation, gql } from '@apollo/client'

const useMutationRegister = () => {
  const REGISTER = gql`
    mutation signup ($input: UserCredentials!) {
      signup (input: $input)
    }
  `
  const [register, { loading, error, data }] = useMutation(REGISTER)
  return { register, loading, error, data }
}

export default useMutationRegister
