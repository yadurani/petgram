import { useMutation, gql } from '@apollo/client'

const useMutationSignIn = () => {
  const LOGIN = gql`
    mutation login ($input: UserCredentials!) {
      login (input: $input)
    }
  `
  const [login, { loading, error, data }] = useMutation(LOGIN)
  return { login, loading, error, data }
}

export default useMutationSignIn
