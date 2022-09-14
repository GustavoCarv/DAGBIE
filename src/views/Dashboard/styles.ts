import styled from 'styled-components'

export const Container = styled.div`
`
export const WelcomeUser = styled.div`
  width: 95%;
  max-width: 720px; 
  margin: 20px auto 10px auto; 
  display: flex; 
  align-items: center;
  justify-content: space-between;
  h3{
    color: #495057;
    @media(max-width: 500px) {
      margin-bottom: -20px;
    }
  }
  @media(max-width: 500px) {
    flex-direction: column;
    gap: 15px;
  }
`
