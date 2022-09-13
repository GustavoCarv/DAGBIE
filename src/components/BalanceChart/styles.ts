import styled, { css } from 'styled-components'

export const BalanceContainer = styled.div`
${({ theme }) => css`
  color: ${theme.colors.darkGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 535px) {
    width: 100%;
    gap: 1.5%;
    margin-top: 8px;
    align-items: center;
  }
`}
`

export const BodyBalance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media(max-width: 535px) {
    flex-direction: column;
    align-items: center;
  }
`

export const TitleBalance = styled.p`
${({ theme }) => css`
  text-align: left;
  color: ${theme.colors.black};
  font-weight: 600;
  h2 {
    @media(max-width: 473px) {
      font-size: 25px;
    }
  }
`}
`

export const ContentBalance = styled.p`
${({ theme }) => css`
  text-align: left;
  font-size: ${theme.fontSizes.medium};
  font-weight: 700;
  p {
    @media(max-width: 473px) {
      font-size: 25px;
    }
  }
`}
`

