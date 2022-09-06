import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  border-radius: 10px;
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