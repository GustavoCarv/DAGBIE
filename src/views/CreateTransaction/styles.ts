import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Form, Button } from 'rsuite'

export const Container = styled.div`
  width: 95%;
  margin-top: 110px;
  margin-bottom: 150px;
`
export const Header = styled.div`
  text-align: center;
`
export const Title = styled.h2`
 ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium}; 
    margin-top: 25px;
  `}
`
export const FormContainer = styled(Form)`
  width: 310px;
  margin: 20px auto;
  span {
    color: red;
  }
`
export const Textarea = styled.textarea`
  width: 100%;
  outline: transparent;
  border-radius: 4px;
`
export const Input = styled.input`
  width: 100%;
  outline: transparent;
  border-radius: 4px;
  padding: 7px;
  border: 0.5px solid grey;
`
export const Select = styled.select`
  width: 100%;
  outline: transparent;
  border-radius: 4px;
  padding: 7px;
  border: 0.5px solid grey;
  option {
    height: 20px;
  }
`
export const ButtonR = styled(Button)`
  ${({ theme }) => css` 
    color: ${theme.colors.white}; 
    background: ${theme.colors.$brandGreen}; 
    border-radius: 50px;
    align-self: center;
    &:hover {
      background: ${theme.colors.$brandGreenHover}; 
      color: ${theme.colors.white}; 
    }
  `}
`;
export const ButtonC = styled(Button)`
  ${({ theme }) => css`
    border-color: ${theme.colors.$brandGreen}; 
    color: ${theme.colors.$brandGreen}; 
    border-radius: 50px;
    align-self: center;
    &:hover {
      background: ${theme.colors.$brandGreen}; 
      color: ${theme.colors.white}; 
    }
  `}
`;