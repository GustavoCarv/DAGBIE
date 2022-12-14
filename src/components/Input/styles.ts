import styled, { css } from "styled-components";

import "rsuite/dist/rsuite.css";
import {InputGroup } from "rsuite";

export const DefaultInput = styled.input`
    ${({ theme }) => css`
        background-color: ${theme.colors.$brandGreenLight};
        border-radius: 8px;
        border: none;
        outline: transparent;
        width: 100%;
        padding: 16px 16px 16px 38px;
        font-size: ${theme.fontSizes.normal_plus};
    `}
`;

export const DefaultInputGroup = styled(InputGroup)`
    background-color: ${({ theme }) => theme.colors.$brandGreenLight};
`;
