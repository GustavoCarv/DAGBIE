import SortDownIcon from '@rsuite/icons/SortDown'
import SortUpIcon from '@rsuite/icons/SortUp'
import { formatNumberToCurrencyOutput } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'
import { Transaction } from '../../interfaces/transaction'
import * as Style from './styles'

type TransactionType = Transaction & {
  onEdit: () => void;
  onDelete: () => void;
}

export const TransactionCard = (props: TransactionType) => {
  return (
    <Style.Container>
      <Style.Header>
        <h4>
          {props.type === 'Saída' 
            ? ( <SortUpIcon color='#F03737' /> )
            : ( <SortDownIcon color='green' /> )
          } { formatNumberToCurrencyOutput(props.value) }
        </h4>
      </Style.Header>
      <Style.Body>
      <h5>{ props.category }</h5>
        { 
          props.description && (
            <p title={props.description}>{ props.description }</p>
          )
        }
      </Style.Body>
      <Style.Footer>
        {props.createdAt && (
          <p>{ formatDate(props.createdAt) }</p>
        )}
        <div>
          <Style.IconEdit onClick={ props.onEdit } />
          <Style.IconTrash onClick={ props.onDelete } />
        </div>
      </Style.Footer>
    </Style.Container>
  )
}
