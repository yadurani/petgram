import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  display: flex;
  margin: 0;
  overflow: auto;
  padding: 15px 4px;
  width: 100%;
  ${props => props.fixed && css`
    ${bounceDown()}
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 10px;
  list-style: none;
`
