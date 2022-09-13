import styled from "styled-components";

import { Button } from "rsuite";
import { Link } from "react-router-dom";

export const DefaultButton = styled(Button)`
    height: 60px;
    background: ${({ theme }) => theme.colors.$brandGreen};

    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 115%;

    color: #f7f9f9;
`;

export const DefaultLink = styled(Link)`
    text-decoration: none;

    font-size: ${({ theme }) => theme.fontSizes.normal_plus};
    line-height: 115%;
    text-align: center;
    color: #212529;

    &:hover {
        text-decoration: underline;
        color: #212529;
    }
`;
