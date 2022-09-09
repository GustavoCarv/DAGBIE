import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
  `}
  border-radius: 5px;
  color: grey;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5%;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`