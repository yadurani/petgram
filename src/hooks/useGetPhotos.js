import { useQuery, gql } from '@apollo/client'

const useGetPhotos = (categoryId) => {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked 
      }
    }
  `
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  return { loading, error, data }
}

export default useGetPhotos
