import * as Style from './styles'
import CalendarIcon from '@rsuite/icons/Calendar';
import SortDownIcon from '@rsuite/icons/SortDown'
import SortUpIcon from '@rsuite/icons/SortUp'
import { formatNumberToCurrencyOutput } from '../../utils/formatCurrency'
import { Transaction } from '../../interfaces/transaction'
import { formatDate } from '../../utils/formatDate'

type LastWeekProps = {
  transactions: Transaction[];
}

export const LastWeekTransactionsCard = (props: LastWeekProps) => {
  return (
    <Style.ContainerGeneral>
      <Style.TitleContainer>
        <CalendarIcon color='#00453a' style={{ fontSize: '2em' }} />
        <Style.CardTitleHome>Última Semana</Style.CardTitleHome>
      </Style.TitleContainer>
      <Style.Container>
        {props.transactions.length == 0
          ? <p
              style={{ textAlign: 'center', marginTop: 20, fontSize: '1.2rem' }}
            >
              Você ainda não possui transações
            </p>
          : (props.transactions.map(transaction => (
              <Style.TransactionLine key={transaction.id_transacao}>
                <div className='value'>
                  {transaction.tipo === 'Saída'
                    ? ( <SortUpIcon color='#F03737' style={{ fontSize: '1.3rem' }} /> )
                    : ( <SortDownIcon color='green' style={{ fontSize: '1.3rem' }} /> )
                  }
                  <p>{formatNumberToCurrencyOutput(transaction.valor)}</p>
                </div>
                <p className='category'>{transaction.categoria}</p>
                <p className='date'>{formatDate(transaction?.data_criacao)}</p>
              </Style.TransactionLine>
            ))
          )
        }
      </Style.Container>
    </Style.ContainerGeneral>
  )
}
