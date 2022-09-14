import styled, { css  } from 'styled-components';

export const Container = styled.div`
  background: #dce9e2;
  border-radius: 5px;
  max-width: 720px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5%;
  margin: 0 auto;
  min-height: 186px;
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
  gap: 1.5%;
`}
`



