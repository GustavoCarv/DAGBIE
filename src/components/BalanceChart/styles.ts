import styled, { css } from 'styled-components'
import { Button } from 'rsuite'

export const BalanceContainer = styled.div`
${({ theme }) => css`
  color: ${theme.colors.$brandGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 690px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`}
`
export const BodyBalance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 690px) {
    flex-direction: column;
    align-items: left;
    gap: 10px;
    margin-top: 20px;
  }
`
export const TitleBalance = styled.p`
${({ theme }) => css`
  text-align: left;
  color: ${theme.colors.black};
  font-size: 1.15rem;
  font-weight: 600;
  h2 {
    @media(max-width: 473px) {
      font-size: 25px;
    }
  }
  @media(max-width: 690px) {
    font-size: 1.29rem;
    margin-bottom: 2px;
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
export const Line = styled.div`
  border-bottom: 0.5px dotted #757a77;
  width: 100%;
  height: 1px;
  margin: 0 10px;
  @media(min-width: 691px) {
    display: none;
  }
`
export const ButtonT = styled(Button)`
  border-radius: 50px; 
  color: #00453a; 
  border-color: #00453a;
  align-self: flex-end; 
  margin-top: 8px;
  &:hover {
    background: #00856f;
    color: #fff;
  }
  @media(max-width: 690px) {
    margin-top: 15px;
  }
`
