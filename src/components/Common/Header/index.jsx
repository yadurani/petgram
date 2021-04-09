import React from 'react'
import Logo from '../../Logo'
import { HeaderWrapper, HeaderContainer, Title } from './styles'

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {!title && <Logo/>}
        {title && <Title>{title}</Title>}
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
