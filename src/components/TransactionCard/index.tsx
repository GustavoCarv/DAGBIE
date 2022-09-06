import { IconButton } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'
import { Transaction } from '../../interfaces/transaction'
import * as Style from './styles'

type TransactionType = Transaction & {
  onEdit: () => void;
  onDelete: () => void;
}

export const TransactionCard = (props: TransactionType) => {
  return (
    <Style.Container
      style={{
        background: props.type === 'Saída' ? '#a31515' : '#0da338',
      }}
    >
      <Style.Header>
        <h3>
          {props.type === 'Saída' ? '- ' : '+ '} R${' '}
          {props.value.toString().replace('.', ',')}
        </h3>
        <p>{props.createdAt}</p>
      </Style.Header>
      <h4>{props.category}</h4>
      {props.description && <p>{props.description}</p>}
      <Style.Footer>
        <IconButton
          onClick={props.onEdit}
          icon={<EditIcon />}
          size="lg"
          style={{
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        />
        <IconButton
          onClick={props.onDelete}
          icon={<TrashIcon />}
          size="lg"
          style={{
            borderRadius: 4,
            border: 'none',
            cursor: 'pointer',
          }}
        />
      </Style.Footer>
    </Style.Container>
  )
}
