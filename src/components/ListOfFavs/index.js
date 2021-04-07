import React from 'react'
import PhotoCard from '../PhotoCard'
import useGetFavorites from '../../hooks/useGetFavorites'
import { useStateValue } from '../../context/AppContext'

const ListOfFavs = () => {
  const { loading, error, data } = useGetFavorites()
  const { removeAuth } = useStateValue()

  if (loading) return <p>Cargando...</p>
  if (error) removeAuth()
  return (
    <ul>
      {data?.favs?.map(photo => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}

export default ListOfFavs
