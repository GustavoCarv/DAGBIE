import React, { FocusEvent, useState, useEffect } from 'react'
import api from '../../services/api'

import * as Styles from './styles'
import BaseInput from '../../components/Input'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

const EditUserProfile: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false)
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha_atual: '',
    nova_senha: ''
  })

  const handleInfoUser = async () => {
       await api.get('/logged')
       .then ( res =>  {
         setUserData(res.data.exibe_logado)
       })
       .catch((error) => {
         console.log(error)
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
              >
                Salvar
              </Styles.DefaultButton>
              { isEditable &&  <label>
                <h4>Senha Atual:</h4>
                <BaseInput
                  placeholder="senha atual"
                  type="password"
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, senha_atual: event.target.value })
                  }}
                ></BaseInput>
              </label>}
              { isEditable && 
                <label>
                  <h4>Nova Senha :</h4>
                  <BaseInput
                    placeholder="nova senha"
                    type="password"
                    onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                      setUserData({ ...userData, nova_senha: event.target.value })
                    }}
                  ></BaseInput>
                </label>
              }
              <Styles.DefaultButton
                type="submit"
                disabled={isEditable ? false : true}
              >
                Salvar nova senha
              </Styles.DefaultButton>       
            </div>
          </Styles.FormWrapper>         
        </div>
      </Styles.Container>
      <Footer />
    </>
  )
}

export default EditUserProfile
