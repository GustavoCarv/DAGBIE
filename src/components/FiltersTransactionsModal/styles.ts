import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Modal, Button } from 'rsuite'

export const Container = styled(Modal)`
  ${({ theme }) => css`
    margin-top: 80px;
    font-size: ${theme.fontSizes.normal};
    width: 315px;
    text-align: center;
  `}
`
export const ButtonT = styled(Button)`
  background: #00856F;
  color: #fff;
  border-radius: 50px;
  align-self: center;
  &:hover {
    background: #00856F;
    color: #fff;
  }
`