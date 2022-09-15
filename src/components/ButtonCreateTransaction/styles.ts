import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { IconButton } from 'rsuite'

export const Button = styled(IconButton)`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreen};
    position: fixed;
    bottom: 30px;
    right: 20px;
    &:hover {
      background: ${theme.colors.$brandGreenHover}
    }
    @media(max-width: 690px) {
      bottom: 60px;
    }
  `};
`