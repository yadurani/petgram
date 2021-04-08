import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid  ${({ theme }) => theme.colors.light}; 
  bottom: 0;
  display: flex;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
  height: 44px;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: white;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  svg:last-child {
    display: none;
  }
  &[aria-current] {
    color: white;
    svg:first-child {
      display: none;
    }
    svg:last-child {
      display: block;
    }
  }
`
