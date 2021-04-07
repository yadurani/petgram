import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import { Img, ImgWrapper, Article } from './styles'
import useNearScreen from '../../hooks/useNearScreen'
import FavButton from '../FavButton'
import useMutationToogleLike from '../../hooks/useMutationToogleLike'
const DEFAULT_IMAGE =
    'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, liked }) => {
  const [show, element] = useNearScreen()
  const { toogleLikePhoto } = useMutationToogleLike(id)
  const handleFavClick = () => toogleLikePhoto()

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string,
  likes: function (props, propName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  },
  src: PropTypes.string,
  liked: PropTypes.bool.isRequired
}

export default PhotoCard
