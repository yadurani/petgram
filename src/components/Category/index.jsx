import React from 'react'
import PropTypes from 'prop-types'
import { Link, Image } from './styles.js'
const DEFAULT_THEME = 'https://i.imgur.com/dJa0Hpl.jpg'

const Category = ({ cover = DEFAULT_THEME, path, emoji = '?' }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt={cover} />
      {emoji}
    </Link>
  )
}

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string
}

export default Category
