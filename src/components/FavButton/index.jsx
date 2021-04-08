import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='24px' /> <b>{likes}</b>&nbsp;likes
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func
}

export default FavButton
