import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Modal } from 'rsuite'

export const Container = styled(Modal)`
  ${({ theme }) => css`
    margin-top: 80px;
    font-size: ${theme.fontSizes.normal};
    width: 315px;
    text-align: center;
  `}
`