import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    width: 100% ;
  }

  font-size: ${({ theme }) => theme.fontSizes.large};
  min-height: 100vh;
`
