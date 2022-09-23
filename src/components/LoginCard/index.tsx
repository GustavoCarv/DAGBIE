import { InputGroup, Loader } from 'rsuite'
import WrapperCard from '../WrapperCard'
import BaseInput from '../../components/Input'
import EmailIcon from '@rsuite/icons/Email'
import { FeedbackTransactionModal } from '../FeedbackTransactionModal'

import * as Style from './styles'

import axios from 'axios'
import { FocusEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VisibleIconPassword } from '../VisibleIconPassword'

const LoginCard: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event: MouseEvent) => {
    const isNotCompleted = Object.values(formData).some((val) => val === '')

    if (isNotCompleted) {
      return
    }

    event.preventDefault()

    setIsLoading(true)

    try {
      axios
        .post('https://devfortech.herokuapp.com/api/login', formData)
        .then((res) => {
          localStorage.setItem("user", res.data.logged)
          setTimeout(() => {
            navigate('/dashboard')
          }, 2000)
        })
        .catch(() => {
          setTimeout(() => {
            setIsLoading(false)
            setIsModalOpen(true)
          }, 2000)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <WrapperCard title="Cadastro">
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
         <VisibleIconPassword showPassword={showPassword} setShowPassword={setShowPassword}/>
      </BaseInput>
      <Style.DefaultButton
        onClick={(event: MouseEvent) => handleSubmit(event)}
        type="submit"
      >
        {!isLoading ? 'Login' : <Loader />}
      </Style.DefaultButton>
      <Style.DefaultLink to={'/cadastro'}>
        Não tem cadastro? Clique aqui!
      </Style.DefaultLink>
      <FeedbackTransactionModal
        open={isModalOpen}
        title={'Credenciais inválidas'}
        description={
          'Por favor verifique suas informações ou cadastre-se novamente.'
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

export default LoginCard
