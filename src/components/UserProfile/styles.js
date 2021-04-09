import styled from 'styled-components'

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 15px 0;
`

export const WrapperProfile = styled.div`
  min-height: calc(100vh - 44px);
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;
  display: flex;
  @media(min-width: 960px) {
    min-height: calc(100vh - 130px);
    border: 1px solid  ${({ theme }) => theme.colors.light};
    margin: 20px 0 20px;
    background:  ${({ theme }) => theme.colors.primary};
  }
`