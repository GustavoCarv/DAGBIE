import { Button } from 'rsuite'

import { ContainerGeneral } from '../ContainerGeneral'
import * as Style from './styles'

type BalanceProps = {
  balanceValue: {entry: number, exit: number, total: number};
  onOpenExtract?: () => void;
}

export const BalanceChart = (props: BalanceProps) => {

  const balanceMovement = 
  [
    {title: 'Entradas', value: props.balanceValue.entry},
    {title: 'Saídas', value: props.balanceValue.exit},
    {title: 'Saldo', value: props.balanceValue.total},
  ]

  return (
    <ContainerGeneral title='Movimentação'>
      <Style.BodyBalance>
        {balanceMovement.map((el) => {
          return (
            <Style.BalanceContainer>
              <Style.TitleBalance>
                {el.title}
              </Style.TitleBalance>
              <Style.ContentBalance>
                {`R$${el.value}`}
              </Style.ContentBalance>
            </Style.BalanceContainer>
          )})} 
        <Button 
          appearance='ghost'
          size="lg"
          style={{ borderRadius: 12,  color: '#00856F', borderColor: '#00856F', alignSelf: 'center', marginTop: 8}} 
          onClick={ props.onOpenExtract }
        >
          Ver extrato
        </Button>
      </Style.BodyBalance>
    </ContainerGeneral>
  )
}