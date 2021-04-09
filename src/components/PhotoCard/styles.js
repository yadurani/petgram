import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  aspect-ratio: 16/9;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0,0,0,0.2);
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  width: 100%;
`

export const Article = styled.article`
  min-height: 200px;
  padding-bottom: 15px;
  background: ${({ theme }) => theme.colors.primary};
  @media(min-width: 960px) {
    border: 1px solid  ${({ theme }) => theme.colors.light};
    margin: 20px 0;
  }
`
