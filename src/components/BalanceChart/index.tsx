import { Button } from 'rsuite'
import { ContainerGeneral } from '../ContainerGeneral'
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
                { formatNumberToCurrencyOutput(el.value) }
              </Style.ContentBalance>
            </Style.BalanceContainer>
          )})} 
        <Button 
          appearance='ghost'
          size="lg"
          style={{ 
            borderRadius: 12,  
            color: '#00453a', 
            borderColor: '#00453a', 
            alignSelf: 'center', 
            marginTop: 8,
          }} 
          onClick={ props.onOpenExtract }
        >
          Ver extrato
        </Button>
      </Style.BodyBalance>
    </ContainerGeneral>
  )
}