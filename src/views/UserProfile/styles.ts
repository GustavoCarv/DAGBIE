import styled from "styled-components";
import { Button } from "rsuite";

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.white};

    min-height: 100vh;

    padding: 100px 150px;
    display: flex;

    @media screen and (max-width: 1023px) {
        padding: 70px 20px 50px;
    }

    > div {
        display: flex;
        width: 100%;
        gap: 50px;

        @media screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 20px;
        }
    }
`;

export const FormWrapper = styled.main`
    padding: 30px;
    border: 1px solid black;
    border-radius: 8px;
    flex-grow: 1;

    > div {
        max-width: 450px;
        margin: 0 auto;

        display: flex;
        gap: 50px;
        flex-direction: column;
        @media screen and (max-width: 1023px) {
            flex-direction: column;
            gap: 20px;
        }
    }

    h2 {
        color: #00453a;
    }

    h4 {
        cursor: pointer;
        border-radius: 8px;
        background-color: white;

        color: #00453a;
    }
`;

export const Menu = styled.nav`
    background-color: ${({ theme }) => theme.colors.$brandGreenLight};

    width: 300px;
    height: 100%;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    gap: 8px;

    @media screen and (max-width: 1023px) {
        width: 100%;
        height: auto;
    }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TitleMenu = styled.h4<any>`
    cursor: pointer;
    border-radius: 8px;
    padding: 16px;
    background-color: ${({ isActive }) => (isActive ? "#00453a" : "white")};

    color: ${({ isActive }) => (isActive ? "white" : "#00453a")};

    transition: all 500ms ease-in-out;

    &:hover {
        color: white;

        background-color: #00453a;
    }
`;

export const DefaultButton = styled(Button)`
    height: 60px;
    background: ${({ theme }) => theme.colors.$brandGreen};
    margin-top: 24px;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: 115%;
    font-weight: 700;

    color: #f7f9f9;

    visibility: visible ;
    opacity: 1 ;
    transition: opacity 2000 ease-in;

    &:hover,
    :focus {
        text-decoration: underline;
        color: #f7f9f9;
        background-color: ${({ theme }) => theme.colors.$brandGreenHover};
    }

    &[disabled] {
        visibility: hidden ;
        opacity: 0 ;
    }
`;
