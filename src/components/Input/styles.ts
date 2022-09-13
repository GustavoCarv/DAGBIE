import styled, { css } from "styled-components";

import "rsuite/dist/rsuite.css";
import { Input, InputGroup } from "rsuite";

export const DefaultInput = styled(Input)`
    ${({ theme }) => css`
        background-color: ${theme.colors.$brandGreenLight};
        border-radius: 8px;
        padding: 16px;
        font-size: ${theme.fontSizes.normal_plus};
    `}
`;

export const DefaultInputGroup = styled(InputGroup)`
    /*   border: 1px solid ${({ theme }) => theme.colors.black}; */
    background-color: ${({ theme }) => theme.colors.$brandGreenLight};
`;
