import { Button } from 'rsuite'
import styled, { css } from 'styled-components'

export const ContainerGeneral = styled.div`
`

export const Container = styled.div`
  margin: 30px auto 0 auto; 
  max-width: 720px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
`

export const ButtonHome = styled(Button)`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreen};
    color: #fff;
    border-radius: 50px;
    align-self: center;
    &:hover {
      background: ${theme.colors.$brandGreenHover};
      color: ${theme.colors.white};
    }
`};
`
