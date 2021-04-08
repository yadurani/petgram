import React from 'react'
import Logo from '../../Logo'
import { HeaderWrapper, HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo/>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
