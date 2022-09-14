import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
  `}
  border-radius: 5px;
  color: grey;
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`
export const Header = styled.header`
  margin-bottom: 5px;
  h4 {
    font-size: 180%;
  }
`
export const Body = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  p {
    text-overflow: ellipsis;
  }
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
`