import styled, { css } from 'styled-components'
import 'rsuite/dist/rsuite.css'
import { Modal, Button } from 'rsuite'

export const Container = styled(Modal)`
  
`
export const Header = styled(Modal.Header)`
  display: flex;
  width: 350px;
  margin: auto;
  align-items: center;
  @media(max-width: 473px) {
    width: 270px;
  }
  @media(max-width: 405px) {
    width: 260px;
  }
`
export const Select = styled.select`
  width: 100%;
  outline: transparent;
  border-radius: 4px;
  padding: 7px;
  border: 0.5px solid grey;
  option {
    height: 20px;
  }
`
export const FilterButton = styled(Button)`
  border-radius: 50px; 
  color: #00453a; 
  border-color: #00453a;
  align-self: flex-end; 
  width: 120px;
  height: 40px;
  &:hover {
    background: #00856f;
    color: #fff;
  }
  @media(max-width: 405px) {
    width: 100px;
  }
`
export const ContainerFilter = styled(Modal)`
  ${({ theme }) => css`
    margin-top: 80px;
    font-size: ${theme.fontSizes.normal};
    width: 315px;
    text-align: center;
    z-index: 10;
  `}
`
export const ButtonT = styled(Button)`
  background: #00856F;
  color: #fff;
  border-radius: 50px;
  &:hover {
    background: #00856F;
    color: #fff;
  }
`
export const ModalTitle = styled(Modal.Title)`
  text-align: center;
  h2 {
    @media(max-width: 473px) {
      font-size: 25px;
    }
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 1910px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 775px) {
    grid-template-columns: 1fr;
  }
`;