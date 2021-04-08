import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 30px;
  width: 100%;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  color: white;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
`

export const FormWrapper = styled.div`
  min-height: calc(100vh - 44px);
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
