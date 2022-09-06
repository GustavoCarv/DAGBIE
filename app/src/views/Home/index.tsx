import BaseInput from '../../components/Input'
import { InputGroup } from 'rsuite'
import AvatarIcon from '@rsuite/icons/legacy/Avatar'

import * as Styles from './styles'
import SignInCard from '../../components/SignInCard'

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <h1>Home</h1>
      <SignInCard title='Cadastro'>
        <BaseInput placeholder="Nome" type="text">
          <InputGroup.Addon
            style={{
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
          >
            <AvatarIcon />
          </InputGroup.Addon>
        </BaseInput>
        <BaseInput type="password" />
      </SignInCard>
    </Styles.Container>
  )
}

export default Home
