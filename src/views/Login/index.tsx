import LoginCard from '../../components/LoginCard'
import LogoComponent from '../../components/LogoComponent'

import * as Styles from './styles'

const Login: React.FC = () => {
  return (
    <Styles.Container>
      <LogoComponent />
      <LoginCard />
    </Styles.Container>
  )
}

export default Login
