import GlobalStyle from './globalStyle/globalStyle'
import Home from './views/Home'

function App() {
  const obj = {
    obj1: 1,
  }

  console.log(obj)
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
