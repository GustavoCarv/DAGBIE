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
`