import React from 'react'
import ListOfFavs from '../components/ListOfFavs'
import Layout from '../components/Layout'

const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos' seo>
    <ListOfFavs />
  </Layout>
)

export default Favs
