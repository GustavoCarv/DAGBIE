import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
`;

export const FormWrapper = styled.main`
    width: 600px;
    padding: 30px;
    margin-top: -150px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 767px) {
        width: 100% ;
        margin-top: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.black};
    font-family: "Inria Serif";
    margin-bottom: 60px;
`;
