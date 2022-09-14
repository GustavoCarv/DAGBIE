import { IconButton } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'
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
      <h5>{ props.category }</h5>
      <Style.Body>
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
          <IconButton
            onClick={ props.onEdit }
            icon={ <EditIcon /> }
            size="lg"
            style={{
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              background: '#fff',
            }}
          />
          <IconButton
            onClick={ props.onDelete }
            icon={ <TrashIcon /> }
            size="lg"
            style={{
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              color: '#A31515',
              background: '#fff',
            }}
          />
        </div>
      </Style.Footer>
    </Style.Container>
  )
}
