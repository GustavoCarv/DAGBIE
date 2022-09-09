import { IconButton } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'
import SortDownIcon from '@rsuite/icons/SortDown'
import SortUpIcon from '@rsuite/icons/SortUp'
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
        <h3>
          {props.type === 'Saída' 
            ? ( <SortUpIcon color='#F03737' /> )
            : ( <SortDownIcon color='green' /> )
          } R${' '}
          { props.value.toString().replace('.', ',') }
        </h3>
        {/* Fazer a formatação de data aqui <p>{ props.createdAt }</p> */}
      </Style.Header>
      <h4>{ props.category }</h4>
      { props.description && <p>{ props.description }</p> }
      <Style.Footer>
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
      </Style.Footer>
    </Style.Container>
  )
}
