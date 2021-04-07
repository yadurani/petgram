import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import PhotoDetail from '../components/PhotoDetail'

const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoDetail id={detailId} />
  </Layout>
)

Detail.propTypes = {
  detailId: PropTypes.string
}

export default Detail
