import { useMutation, gql } from '@apollo/client'

const useMutationToogleLike = (id) => {
  const MUTATION_LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id,
        liked,
        likes
      }
    }
  `
  const [toogleLikePhoto, { loading, error }] = useMutation(MUTATION_LIKE_PHOTO, {
    variables: { input: { id } }
  })
  return { toogleLikePhoto, loading, error }
}

export default useMutationToogleLike
