import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as Style from './styles'

import ArowBackIcon from '@rsuite/icons/ArowBack';

import NOTFOUND from '../../assets/notfound.png'

const Error = () => {

  const navigate = useNavigate();

  return (
    <Style.ContainerGeneral>
      <div style={{height:60, width:"100%", background:"green", color: '#fff', position: 'fixed', top:0, zIndex:10 }}>Header teste</div>
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
      <div style={{ height: 50, width: "100%", background: "green", color: '#fff' }}>Footer teste</div>
    </Style.ContainerGeneral>
  )
}

export default Error