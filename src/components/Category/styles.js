import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 56px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 56px;
  width: 56px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`

export const ImageWrapper = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
  position: relative;
  &:before {
    position: absolute;
    top: -2px; 
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(224deg, #b500b5, #ffbc00);
    content: '';
    z-index: -1;
    border-radius: 50%;
  }
`
