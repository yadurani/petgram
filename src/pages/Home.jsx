import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import ListOfCategories from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'
import Layout from '../components/Layout'

const Home = ({ id }) => {
  return (
    <Layout seo={false}>
      <Helmet>
        <title>Petgram 😸🐶🐹🐠 | Tu app de fotos de mascotas</title>
        <meta name='description' content='Con petgram puedes encontrar fotos de animales muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
Home.propTypes = {
  id: PropTypes.string
}

export default memo(Home, (prevProps, props) => {
  return prevProps.id === props.id
})
