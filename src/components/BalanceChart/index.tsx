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
        {balanceMovement.map((el, index) => {
          return (
            <Style.BalanceContainer>
              <Style.TitleBalance>
                {el.title}
              </Style.TitleBalance>
              <Style.Line></Style.Line>
              <Style.ContentBalance style={{color: index == 1 ? '#495057' : ''}}>
                { formatNumberToCurrencyOutput(el.value) }
              </Style.ContentBalance>
            </Style.BalanceContainer>
          )})} 
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