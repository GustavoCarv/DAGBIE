import React, { FocusEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import * as Styles from './styles'
import BaseInput from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FeedbackTransactionModal } from '../../components/FeedbackTransactionModal'
import { VisibleIconPassword } from '../../components/VisibleIconPassword'


const EditUserProfile: React.FC = () => {
  const navigate = useNavigate()
  const [isEditable, setIsEditable] = useState(false)
  const [userData, setUserData] = useState({
    nome: 'Ivan',
    email: 'ivanoliveira@gmail.com',
    id_usuario: '1',
    senha_atual: '',
    nova_senha: '',
    confirm_senha: '',
  })
  const [ previousValues, setPreviousValues ] = useState({
    nome: '',
    email: '',
  })
  const [ openSuccess, setOpenSuccess ] = useState(false)
  const [ openError, setOpenError ] = useState(false)
  const [ description, setDescription ] = useState(
    'Ocorreu um erro ao editar os dados do perfil. Por favor, tente novamente mais tarde.',
    )
  const [ showPassword, setShowPassword ] = useState(false)
  const [ openConfirm, setOpenConfirm] = useState(false)

  const handleInfoUser = async () => {
       await api.get('/logged')
       .then ( res =>  {
         if (res.data.exibe_logado){
           setUserData(res.data.exibe_logado)
           setPreviousValues(res.data.exibe_logado)
         }
       })
       .catch((error) => {
         console.log(error)
       })
  }

  const handleSubmitEditProfile = async () => {
    if (userData.nome == '' || userData.email == '' || userData.nome === previousValues.nome || userData.email === previousValues.email){
      setOpenError(true)
    } else{
      const body = {
        id_usuario: userData.id_usuario,
        nome: userData.nome,
        email: userData.email,
      }
      await api.post('/edit_user', body)
      .then ( () =>  {
        setOpenSuccess(true)
      })
      .catch(() => {
        setOpenError(true)
      })
    }
    }

    const handleSubmitEditPassword = () => {
      if (userData.senha_atual == '' || userData.nova_senha == ''){
        setOpenError(true)
      } else{
        setOpenSuccess(true)
      }
      }

    const handleSubmitDeleteProfile = async () => {
      const body = {
        id_usuario: userData.id_usuario,
      }
      await api.post('/del_user', body)
      .then ( () =>  navigate('/'))
      .catch(() => {
        setDescription('Ocorreu um erro ao excluir o perfil. Por favor, tente novamente mais tarde.')
        setOpenError(true)
      })
      }

  useEffect (() => {
    handleInfoUser()
  }, [])

  return (
    <>
      <Header />
      <Styles.Container>
        <div>
          <Styles.Menu>
            <Styles.TitleMenu
              isActive={isEditable ? false : true}
              onClick={() => setIsEditable(false)}
            >
              {' '}
              Perfil{' '}
            </Styles.TitleMenu>
            <Styles.TitleMenu
              isActive={isEditable ? true : false}
              onClick={() => setIsEditable(true)}
            >
              {' '}
              Editar dados
            </Styles.TitleMenu>
            
          </Styles.Menu>
          <Styles.FormWrapper>
            <div>
              <h2>Dados Pessoais</h2>

              <label>
                <h4>Nome :</h4>
                <BaseInput
                  placeholder="nome"
                  name='nome'
                  type="text"
                  value={userData.nome}
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, nome: event.target.value })
                  }}
                  isDisabled={isEditable ? false : true}
                ></BaseInput>
              </label>
              <label>
                <h4>Email :</h4>
                <BaseInput
                  placeholder="email"
                  type="email"
                  value={userData.email}
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, email: event.target.value })
                  }}
                  isDisabled={isEditable ? false : true}
                ></BaseInput>
              </label>
              <Styles.DefaultButton
                type="submit"
                disabled={isEditable ? false : true}
                onClick={() => handleSubmitEditProfile()}
              >
                Salvar
              </Styles.DefaultButton>
              { isEditable &&  <>
              <label>
                <h4>Senha Atual:</h4>
                <BaseInput
                  placeholder="senha atual"
                  type={`${showPassword ? 'text' : 'password'}`}
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, senha_atual: event.target.value })
                  }}
                >
                  <VisibleIconPassword showPassword={showPassword} setShowPassword={setShowPassword}/>
                </BaseInput>
              </label>         
                <label>
                  <h4>Nova Senha :</h4>
                  <BaseInput
                    placeholder="nova senha"
                    type={`${showPassword ? 'text' : 'password'}`}
                    onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                      setUserData({ ...userData, nova_senha: event.target.value })
                    }}
                  >
                    <VisibleIconPassword showPassword={showPassword} setShowPassword={setShowPassword}/>
                  </BaseInput>
                </label>
                <label>
                  <h4>Confirme nova senha :</h4>
                  <BaseInput
                    placeholder="nova senha"
                    type={`${showPassword ? 'text' : 'password'}`}
                    onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                      setUserData({ ...userData, confirm_senha: event.target.value })
                    }}
                  >
                    <VisibleIconPassword showPassword={showPassword} setShowPassword={setShowPassword}/>
                  </BaseInput>
                </label>
                {/* {userData.confirm_senha !== userData.nova_senha ?
                  <p style={{color: 'red'}}>As senhas não coincidem</p>
                  :
                  <p style={{color: 'green'}}>Senhas coincidem</p>
                } */}
                </>}
              <Styles.DefaultButton
                type="submit"
                disabled={isEditable ? false : true}
                onClick={() => {
                  if (userData.confirm_senha !== userData.nova_senha){
                    setDescription('As senhas não coincidem, tente novamente.')
                    setOpenError(true)
                  } else {
                    handleSubmitEditPassword()
                  }
                }}
              >
                Salvar nova senha
              </Styles.DefaultButton>  
              <Styles.DefaultButton
                style={{backgroundColor: 'red'}}
                type="submit"
                disabled={isEditable ? false : true}
                onClick={() => setOpenConfirm(true)}
              >
                Excluir perfil
              </Styles.DefaultButton>        
            </div>
            <FeedbackTransactionModal
              open={openSuccess}
              title='Sucesso!'
              description=
                'Dados de perfil/senha editados com sucesso'
              onAccept={() => {
                setOpenSuccess(false)
              }}
              onClose={() => {
                setOpenSuccess(false)
              }}
             />
             <FeedbackTransactionModal
              open={openError}
              title='Erro!'
              description={description}
              onAccept={() => {
                setOpenError(false)
              }}
              onClose={() => {
                setOpenError(false)
              }}
             />
             <FeedbackTransactionModal
              open={openConfirm}
              title='Deseja excluir o perfil?'
              description={'Tem certeza que deseja excluir esse perfil? Essa ação é irrevogável'}
              onAccept={() => {
                setOpenConfirm(false)
                handleSubmitDeleteProfile()
              }}
              onClose={() => {
                setOpenConfirm(false)
              }}
             />
          </Styles.FormWrapper>         
        </div>
      </Styles.Container>
      <Footer />
    </>
  )
}

export default EditUserProfile
