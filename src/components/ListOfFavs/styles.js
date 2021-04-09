import styled from 'styled-components'

export const WrapperFavs = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-gap: 5px;
  align-content: baseline;
  @media(min-width: 960px) {
    min-height: calc(100vh - 130px);
    border: 1px solid  ${({ theme }) => theme.colors.light};
    margin: 20px 0 20px;
    background:  ${({ theme }) => theme.colors.primary};
  }
`
export const FavItem = styled.li`
height: 100px;
`

export const FavImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const NotFav = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 24px;
  text-align: center;
  flex-direction: column;
  padding: 40px;
`