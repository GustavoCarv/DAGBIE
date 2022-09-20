import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as Style from './styles'

import ArowBackIcon from '@rsuite/icons/ArowBack';

import NOTFOUND from '../../assets/notfound.png'

const Error = () => {

  const navigate = useNavigate();

  return (
    <Style.ContainerGeneral>
      <Style.Container>
        <h2>Ops! Página não encontrada</h2>
        <Style.ButtonHome
          appearance='ghost'
          size='lg'
          onClick={() => navigate(-1)}>
          <ArowBackIcon /> Voltar
        </Style.ButtonHome>
        <img src={NOTFOUND} width={500} height={500}/>
      </Style.Container>
    </Style.ContainerGeneral>
  )
}

export default Error