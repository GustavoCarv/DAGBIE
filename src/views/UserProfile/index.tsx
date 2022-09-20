import React, { FocusEvent, useState } from 'react'
import BaseInput from '../../components/Input'
import * as Styles from './styles'

const EditUserProfile: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false)
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
  })

  return (
    <>
      <div
        style={{
          height: 60,
          width: '100%',
          background: '#00453A',
          color: '#fff',
          position: 'fixed',
          top: 0,
          zIndex: 10,
        }}
      >
        Header teste
      </div>
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
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, email: event.target.value })
                  }}
                  isDisabled={isEditable ? false : true}
                ></BaseInput>
              </label>
              <label>
                <h4>Senha :</h4>
                <BaseInput
                  placeholder="senha"
                  type="password"
                  onChangeEvent={(event: FocusEvent<HTMLInputElement>) => {
                    setUserData({ ...userData, senha: event.target.value })
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
            </div>
          </Styles.FormWrapper>
        </div>
      </Styles.Container>
    </>
  )
}

export default EditUserProfile
