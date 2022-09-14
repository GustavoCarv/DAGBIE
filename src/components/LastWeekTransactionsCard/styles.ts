import styled, { css } from 'styled-components'

export const ContainerGeneral = styled.div`
  background: #dce9e2;
  border-radius: 5px;
  width: 95%;
  max-width: 720px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px auto 40px auto;
  min-height: 186px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
  `}
`
export const CardTitleHome = styled.h4`
  text-align: left;
  h2 {
    @media(max-width: 473px) {
      font-size: 25px;
    }
  }
`
export const TitleContainer = styled.div`
${({ theme }) => css`
  color: ${theme.colors.$brandGreenHover};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`}
`
export const TransactionLine = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.normal_plus};
    display: flex;
    justify-content: space-between;
    padding: 7px;
    margin-top: -5px;
    border-bottom: 1px solid #B0B9B4;
    .value {
      display: flex;
      p {
        color: ${theme.colors.black};
        margin-left: 10px;
      }
    }
    .category {
      @media(max-width: 590px) {
        display: none;
      }
    }
    .date {
      @media(max-width: 590px) {
        margin-left: 25px;
      }
    }
    @media(max-width: 410px) {
      flex-direction: column;
    }
  `}
`