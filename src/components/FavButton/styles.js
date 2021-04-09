import styled, { css } from 'styled-components'

export const Button = styled.button`
  align-items: center;
  color: white;
  display: flex;
  font-size: 16px;
  padding-left: 12px;
  padding-top: 15px;
  cursor: pointer;
  & svg {
    margin-right: 10px
  }
  ${({active}) => active && css`
    & svg {
      color: ${({theme}) => theme.colors.active};
    }
  `}
`
