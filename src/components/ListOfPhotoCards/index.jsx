import React from 'react'
import PropTypes from 'prop-types'
import useGetPhotos from '../../hooks/useGetPhotos'
import PhotoCard from '../PhotoCard'

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Upps!! Hubo un error!!</p>

  return (
    <ul>
      {data?.photos?.map(photo => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}

ListOfPhotoCards.propTypes = {
  categoryId: PropTypes.string
}

export default ListOfPhotoCards
