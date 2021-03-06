import React from 'react'
import { Nav, Link, WrapperNav } from './styles'
import { BsHouse, BsHouseFill, BsHeart, BsHeartFill, BsPerson, BsPersonFill } from 'react-icons/bs'

const SIZE = '24px'
const NavBar = () => (
  <WrapperNav>
    <Nav>
      <Link to='/'>
        <BsHouse size={SIZE} />
        <BsHouseFill size={SIZE} />
      </Link>
      <Link to='/favs'>
        <BsHeart size={SIZE} />
        <BsHeartFill size={SIZE} /></Link>
      <Link to='/user'>
        <BsPerson size={SIZE} />
        <BsPersonFill size={SIZE} /></Link>
    </Nav>
  </WrapperNav>
)

export default NavBar
