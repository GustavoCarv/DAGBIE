import styled from 'styled-components'
import { Button } from 'rsuite'

export const Container = styled.div`
`
export const WelcomeUser = styled.div`
  width: 95%;
  max-width: 720px; 
  margin: 110px auto 10px auto; 
  display: flex; 
  align-items: center;
  justify-content: space-between;
  h3{
    color: #495057;
  }
`
export const ButtonT = styled(Button)`
  background: #00856f;
  color: #fff;
  border-radius: 50px;
  align-self: center;
  &:hover {
    background: #00453a;
    color: #fff;
  }
  @media(max-width: 502px) {
    display: none;
  }
`
