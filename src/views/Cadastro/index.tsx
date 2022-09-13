import LogoComponent from '../../components/LogoComponent'
import SignInCard from '../../components/SignInCard'
import * as Styles from './styles'

const Cadastro: React.FC = () => {
  return (
    <Styles.Container>
      <LogoComponent />
      <SignInCard />
    </Styles.Container>
  )
}

export default Cadastro
