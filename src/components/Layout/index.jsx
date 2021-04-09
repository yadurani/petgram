import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Div, Subtitle, Title } from './styles'
import Header from '../Common/Header'

const Layout = ({ children, title, subtitle, seo }) => {
  return (
    <>
      {seo &&
        <Helmet>
          {title && <title>{title} | Petgram 🐶</title>}
          {subtitle && <meta name='description' content={subtitle} />}
        </Helmet>
      }
      <Header title={title}/>
      <Div>
        {children}
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  seo: PropTypes.bool
}

export default Layout
