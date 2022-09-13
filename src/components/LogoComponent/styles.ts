import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-content: center;
    background: ${({ theme }) => theme.colors.$brandGreenHover};
`;
