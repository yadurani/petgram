import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  display: flex;
  margin: 0;
  overflow: auto;
  padding: 15px 4px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  @media(min-width: 990px) {
    border: 1px solid  ${({ theme }) => theme.colors.light};
    margin: 20px 0;
  }
  @media(max-width: 960px) {
    background: ${({ theme }) => theme.colors.secondary};
  }
  ${props => props.fixed && css`
    display: none;
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 18px;
    transform: scale(.5);
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 10px;
  list-style: none;
`
