import styled from 'styled-components'
import { Modal, Button } from 'rsuite'

export const Container = styled(Modal)`
  
`
export const Header = styled(Modal.Header)`
  display: flex;
  width: 320px;
  margin: auto;
  align-items: center;
  @media(max-width: 473px) {
    width: 270px;
  }
  @media(max-width: 405px) {
    width: 260px;
  }
`
export const FilterButton = styled(Button)`
  width: 120px;
  height: 40px;
  @media(max-width: 405px) {
    width: 100px;
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