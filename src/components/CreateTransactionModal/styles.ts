import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Modal, Form } from 'rsuite'

export const Container = styled(Modal)`
  width: 95%;
`
export const Header = styled(Modal.Header)`
  text-align: center;
`
export const Title = styled(Modal.Title)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium}; 
  `}
  margin-top: 15px;
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