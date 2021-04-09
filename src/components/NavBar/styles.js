import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  max-width: 500px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 44px;
  width: 100%;
`
export const WrapperNav = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid  ${({ theme }) => theme.colors.light}; 
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
