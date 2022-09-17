import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex ;
    align-items:center ;

`;

export const FormWrapper = styled.main`
    width: 100%;
    height: 100%;
    padding: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 767px) {
        width: calc(100% - 30px);
        margin: 0 auto;
        margin-top: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 36px;

    width: 100%;

    @media (max-width: 767px) {
        gap: 24px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Inria Serif";
    margin-bottom: 40px;
`;
