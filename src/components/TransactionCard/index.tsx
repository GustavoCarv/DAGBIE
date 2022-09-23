import SortDownIcon from '@rsuite/icons/SortDown'
import SortUpIcon from '@rsuite/icons/SortUp'
import { formatNumberToCurrencyOutput } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'
import { Transaction } from '../../interfaces/transaction'
import * as Style from './styles'

type TransactionProps = Transaction & {
  onDelete: () => void;
  onEdit: () => void;
}

export const TransactionCard = (props: TransactionProps) => {
  return (
    <Style.Container>
      <Style.Header>
        <h4>
          {props.tipo === 'Saída' 
            ? ( <SortUpIcon color='#F03737' /> )
            : ( <SortDownIcon color='green' /> )
          } { formatNumberToCurrencyOutput(props.valor) }
        </h4>
      </Style.Header>
      <Style.Body>
      <h5>{ props.categoria }</h5>
        { 
          props.descricao && (
            <p title={props.descricao}>{ props.descricao }</p>
          )
        }
      </Style.Body>
      <Style.Footer>
        {props.data_criacao && (
          <p>{ formatDate(props.data_criacao) }</p>
        )}
        <div>
          <Style.IconEdit onClick={ props.onEdit } />
          <Style.IconTrash onClick={ props.onDelete } />
        </div>
      </Style.Footer>
    </Style.Container>
  )
}
