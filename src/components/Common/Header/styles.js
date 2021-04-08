import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  height: 44px;
  left:0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 975px;
`
