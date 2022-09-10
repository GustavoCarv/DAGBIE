import { InputGroup } from 'rsuite'
import BaseInput from '../../components/Input'
import SignInCard from '../../components/SignInCard'
import AvatarIcon from '@rsuite/icons/legacy/Avatar'
import VisibleIcon from '@rsuite/icons/Visible'
import UnvisibleIcon from '@rsuite/icons/Unvisible'
import EmailIcon from '@rsuite/icons/Email'
import { Button } from 'rsuite'

import * as Styles from './styles'

import { useState } from 'react'

const Home: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Styles.Container>
      <h1>Home</h1>
      <SignInCard title="Cadastro">
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
        <BaseInput type="email">
          <InputGroup.Addon
            style={{
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            onClick={() => {
              setShowPassword(!showPassword)
            }}
          >
            <EmailIcon />
          </InputGroup.Addon>
        </BaseInput>
        <BaseInput type={`${showPassword ? 'text' : 'password'}`}>
          <InputGroup.Addon
            style={{
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            onClick={() => {
              setShowPassword(!showPassword)
            }}
          >
            {showPassword ? <VisibleIcon /> : <UnvisibleIcon />}
          </InputGroup.Addon>
        </BaseInput>
        <BaseInput type={`${showPassword ? 'text' : 'password'}`}>
          <InputGroup.Addon
            style={{
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            onClick={() => {
              setShowPassword(!showPassword)
            }}
          >
            {showPassword ? <VisibleIcon /> : <UnvisibleIcon />}
          </InputGroup.Addon>
        </BaseInput>
        <Button color="green" appearance="primary" size="lg">
          Green
        </Button>
      </SignInCard>
    </Styles.Container>
  )
}

export default Home
