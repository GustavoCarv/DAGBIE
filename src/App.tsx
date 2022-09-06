import GlobalStyle from './style/globalStyle'
import { Theme } from './style/Theme'

import Router from './routes'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router />
    </Theme>
  )
}

export default App
