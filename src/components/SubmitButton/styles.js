import styled from 'styled-components'

export const Button = styled.button`
  background:#285AEB;
  border-radius: 3px;
  color:#fff;
  height: 32px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    opacity: .3;
  }
`
