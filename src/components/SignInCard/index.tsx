import { InputGroup } from 'rsuite'
import WrapperCard from '../WrapperCard'
import BaseInput from '../../components/Input'
import AvatarIcon from '@rsuite/icons/legacy/Avatar'
import VisibleIcon from '@rsuite/icons/Visible'
import UnvisibleIcon from '@rsuite/icons/Unvisible'
import EmailIcon from '@rsuite/icons/Email'

import * as Style from './styles'

import { useState } from 'react'

const SignInCard: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <WrapperCard title="Cadastro">
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
      <BaseInput placeholder="Email" type="email">
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
      <BaseInput
        placeholder="Senha"
        type={`${showPassword ? 'text' : 'password'}`}
      >
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
      <BaseInput
        placeholder="Confirme sua senha"
        type={`${showPassword ? 'text' : 'password'}`}
      >
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
      <Style.DefaultButton>Cadastrar-se</Style.DefaultButton>
      <Style.DefaultLink to={'/login'}>
        Já tem conta? Clique aqui para logar!
      </Style.DefaultLink>
    </WrapperCard>
  )
}

export default SignInCard
