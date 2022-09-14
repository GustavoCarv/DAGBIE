import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { IconButton } from 'rsuite'

export const Button = styled(IconButton)`
  ${({ theme }) => css`
    background: ${theme.colors.darkGreen};
    &:hover {
      background: ${theme.colors.lightGreen}
    }
  `};
  position: fixed;
  bottom: 35px;
  right: 20px;
`