import React, { useState } from 'react'
import { ContainerGeneral } from '../ContainerGeneral'
import { ButtonVisibleBalance } from '../ButtonVisibleBalance'
import { formatNumberToCurrencyOutput } from '../../utils/formatCurrency'
import * as Style from './styles'

type BalanceProps = {
  entry: number; 
  exit: number; 
  total: number;
  onOpenExtract?: () => void;
}

export const BalanceChart = (props: BalanceProps) => {

  const balanceMovement = 
  [
    {title: 'Saldo', value: props.total},
    {title: 'Entradas', value: props.entry},
    {title: 'Saídas', value: props.exit},
  ]

  const [visible, setVisible] = useState(true)

  return (
    <ContainerGeneral title='Movimentação'>
      <ButtonVisibleBalance visible={visible} onClick={() => setVisible(!visible)}/>
      <Style.BodyBalance style={{justifyContent: !visible ? 'flex-end' : ''}}>
       {visible && (balanceMovement.map((el, index) => {
          return (
            <Style.BalanceContainer key={index}>
              <Style.TitleBalance>
                {el.title}
              </Style.TitleBalance>
              <Style.Line></Style.Line>
              <Style.ContentBalance style={{color: index == 2 ? '#495057' : ''}}>
                { formatNumberToCurrencyOutput(el.value) }
              </Style.ContentBalance>
            </Style.BalanceContainer>
          )}))}
        <Style.ButtonT 
          appearance='ghost'
          size='lg'
          onClick={ props.onOpenExtract }
        >
          Ver extrato
        </Style.ButtonT>
      </Style.BodyBalance>
    </ContainerGeneral>
  )
}