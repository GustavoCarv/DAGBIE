import GlobalStyle from './style/globalStyle'
import { Theme } from './style/Theme'
import Home from './views/Home'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Home />
    </Theme>
  )
}

export default App
