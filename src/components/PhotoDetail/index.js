import React from 'react'
import PropTypes from 'prop-types'

import useGetSinglePhoto from '../../hooks/useGetSinglePhoto'
import PhotoCard from '../PhotoCard'

const PhotoDetail = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Upps!! Hubo un error!!</p>

  return (
    <PhotoCard {...data?.photo} />
  )
}

PhotoDetail.propTypes = {
  id: PropTypes.string
}

export default PhotoDetail
