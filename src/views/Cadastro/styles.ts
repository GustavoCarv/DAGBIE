import styled from "styled-components";

export const Container = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.large};

    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1023px) {
        grid-template-columns: 1fr;
    }
`;
