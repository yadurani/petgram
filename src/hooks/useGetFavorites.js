import { useQuery, gql } from '@apollo/client'

const useGetFavorites = () => {
  const GET_FAVORITES = gql`
    query getFavs {
      favs {
        id
        categoryId
        src
        likes
        userId
      }
    }
  `
  const { data, error, loading } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
  return { data, loading, error }
}

export default useGetFavorites
