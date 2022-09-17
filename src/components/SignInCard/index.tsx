import { InputGroup, Loader } from 'rsuite'
import WrapperCard from '../WrapperCard'
import BaseInput from '../../components/Input'
import AvatarIcon from '@rsuite/icons/legacy/Avatar'
import VisibleIcon from '@rsuite/icons/Visible'
import UnvisibleIcon from '@rsuite/icons/Unvisible'
import EmailIcon from '@rsuite/icons/Email'
import { FeedbackTransactionModal } from '../FeedbackTransactionModal'

import * as Style from './styles'

import { FocusEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignInCard: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  })
  const [secondPassword, setSecondPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const isNotCompleted = Object.values(formData).some((val) => val === '')

    if (isNotCompleted) {
      return
    }

    setIsLoading(true)

    if (secondPassword !== formData.senha) {
      setIsModalOpen(true)
      return
    }

    try {
      axios
        .post('https://devfortech.herokuapp.com/api/create_user', formData)
        .then(() => {
          setTimeout(() => {
            navigate('/dashboard')
          }, 2000)
        })
        .catch(() => {
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <WrapperCard title="Cadastro">
      <BaseInput
        placeholder="Nome"
        type="text"
        isRequired={true}
        onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
          setFormData({ ...formData, nome: event.target.value })
        }}
      >
        <InputGroup.Addon
          style={{
            top: '50%',
            transform: 'translate(0, -50%)',
          }}
        >
          <AvatarIcon
            style={{
              fill: '#00453A',
            }}
          />
        </InputGroup.Addon>
      </BaseInput>
      <BaseInput
        placeholder="Email"
        type="email"
        isRequired={true}
        onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
          setFormData({ ...formData, email: event.target.value })
        }}
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
          <EmailIcon
            style={{
              fill: '#00453A',
            }}
          />
        </InputGroup.Addon>
      </BaseInput>
      <BaseInput
        placeholder="Senha"
        type={`${showPassword ? 'text' : 'password'}`}
        isRequired={true}
        onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
          setFormData({ ...formData, senha: event.target.value })
        }}
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
          {showPassword ? (
            <VisibleIcon
              style={{
                fill: '#00453A',
              }}
            />
          ) : (
            <UnvisibleIcon
              style={{
                fill: '#00453A',
              }}
            />
          )}
        </InputGroup.Addon>
      </BaseInput>
      <BaseInput
        placeholder="Confirme sua senha"
        type={`${showPassword ? 'text' : 'password'}`}
        isRequired={true}
        onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
          setSecondPassword(event.target.value)
        }}
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
          {showPassword ? (
            <VisibleIcon
              style={{
                fill: '#00453A',
              }}
            />
          ) : (
            <UnvisibleIcon
              style={{
                fill: '#00453A',
              }}
            />
          )}
        </InputGroup.Addon>
      </BaseInput>
      <Style.DefaultButton type="submit" onClick={handleSubmit}>
        {!isLoading ? 'Cadastrar-se' : <Loader />}
      </Style.DefaultButton>
      <Style.DefaultLink to={'/login'}>
        Já tem conta? Clique aqui para logar!
      </Style.DefaultLink>
      <FeedbackTransactionModal
        open={isModalOpen}
        title={'Confira suas senhas!'}
        description={
          'As senhas precisam ser iguais para prosseguir com o cadastro.'
        }
        onAccept={() => {
          setIsModalOpen(false)
        }}
        onClose={() => {
          setIsModalOpen(false)
        }}
      />
    </WrapperCard>
  )
}

export default SignInCard
