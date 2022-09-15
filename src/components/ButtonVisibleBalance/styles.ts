import styled, { css } from "styled-components";
import { IconButton } from "rsuite";

export const Button = styled(IconButton)`
  ${({ theme }) => css`
    align-self: flex-end;
    margin-right: 16px;
    background:${theme.colors.$brandGreen};
    &:hover {
      background: ${theme.colors.$brandGreenHover}
    }
  `};
`
