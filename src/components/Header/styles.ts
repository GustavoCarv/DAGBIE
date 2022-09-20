import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreenHover};
    height: 70px; 
    width: 100%; 
    color: ${theme.colors.white} 
    position: fixed; 
    top: 0;
    z-index: 10;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 150px;
      cursor: pointer;
    }
    @media(max-width: 690px) {
      padding: 0 10px;
    }
  `}
`
export const HeaderDesktop = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.white};
    .userIcon {
      width: 20px;
    }
    @media(max-width: 690px) {
      display: none;
    }
  `}
`
export const HeaderMobile = styled.div`
  color: #fff;
  @media(min-width: 690px) {
    display: none;
  }
`
export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13px;
    cursor: pointer;
    &:hover {
      background: ${theme.colors.$brandGreen};
    }
  `}
`