import styled from "styled-components";

import { Button } from "rsuite";
import { Link } from "react-router-dom";

export const DefaultButton = styled(Button)`
    height: 60px;
    background: ${({ theme }) => theme.colors.$brandGreen};
    margin-top: 24px;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 115%;
    font-weight: 700;

    color: #f7f9f9;

    &:hover,
    :focus {
        text-decoration: underline;
        color: #f7f9f9;
        background-color: ${({ theme }) => theme.colors.$brandGreenHover};
    }
`;

export const DefaultLink = styled(Link)`
    text-decoration: none;

    font-size: ${({ theme }) => theme.fontSizes.normal_plus};
    line-height: 115%;
    font-weight: 700;
    text-align: center;
    color: #212529;

    &:hover {
        text-decoration: underline;
        color: #212529;
    }
`;
