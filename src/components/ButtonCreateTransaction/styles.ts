import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { IconButton } from 'rsuite'

export const Button = styled(IconButton)`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreen};
    position: fixed;
    bottom: 60px;
    right: 15px;
    &:hover {
      background: ${theme.colors.$brandGreenHover}
    }
  `};
`