import styled, { css } from 'styled-components'

import 'rsuite/dist/rsuite.css'
import { Input, InputGroup } from 'rsuite'

export const DefaultInput = styled(Input)`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGrey};
    border-radius: 8px;
    padding: 21px;
    font-size: ${theme.fontSizes.medium};
  `}
`

export const DefaultInputGroup = styled(InputGroup)`
  border: 1px solid ${({ theme }) => theme.colors.black};
`
