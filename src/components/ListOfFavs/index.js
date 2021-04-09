import React from 'react'
import useGetFavorites from '../../hooks/useGetFavorites'
import { useStateValue } from '../../context/AppContext'
import { FavImg, FavItem, NotFav, WrapperFavs } from './styles'

const ListOfFavs = () => {
  const { loading, error, data } = useGetFavorites()
  const { removeAuth } = useStateValue()
  const noData = data?.favs.length === 0
  
  if (loading) return <p>Cargando...</p>
  if (error) removeAuth()
  if(noData) return <NotFav><span>💔😔</span>No tienes favoritos!!</NotFav>

  return (
    <WrapperFavs>
      {data?.favs?.map(photo => (
        <FavItem key={photo.id}>
          <FavImg src={photo.src} alt={photo.src} />
        </FavItem>
      ))}
    </WrapperFavs>
  )
}

export default ListOfFavs
