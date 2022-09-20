import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreenHover};
    height: 50px; 
    width: 100%; 
    position: fixed; 
    bottom: 0;
    z-index: 8;
    padding: 5px 10px 0 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    .userIcon {
      width: 20px;
    }
    @media(min-width: 690px) {
      display: none;
    }
  `}
`
export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 13px;
    cursor: pointer;
    &:hover {
      background: ${theme.colors.$brandGreen};
    }
  `}
`
export const FooterDesktop = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.$brandGreenHover};
    color: ${theme.colors.white}; 
    height: 40px; 
    width: 100%; 
    position: fixed; 
    bottom: 0;
    z-index: 8;
    padding: 5px 10px 0 10px;
    text-align: center;
    p {
      padding-top: 7px;
    }
    @media(max-width: 690px) {
      display: none;
    }
  `}
`
export const OptionLogout = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white}; 
    font-size: ${theme.fontSizes.normal_plus}; 
  `}
`;