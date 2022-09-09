import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Modal } from 'rsuite'

export const Container = styled(Modal)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.normal};
    width: 95%;
    max-width: 480px;
    text-align: center;  
  `}
  margin: 15% auto;
  @media(max-width: 600px) {
    margin-top: 25%;
  }
  @media(max-width: 450px) {
    margin-top: 45%;
  }
`
export const Header = styled(Modal.Header)`
  margin: 20px 10px;
`
export const Footer = styled(Modal.Footer)`
  margin: 10px 15px;
`
