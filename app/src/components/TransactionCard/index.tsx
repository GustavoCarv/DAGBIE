import React from 'react'
import { IconButton } from 'rsuite'
import EditIcon from '@rsuite/icons/Edit'
import TrashIcon from '@rsuite/icons/Trash'
import * as Style from './styles'

type transaction = {
  onEdit: () => void;
  onDelete: () => void;
  value: number;
  createdAt: string;
  category: string;
  description?: string;
  type: string;
};

export const TransactionCard: React.FC<transaction> = (props) => {
  return (
    <Style.Container style={{
      background: props.type === "Saída" ? "#a31515" : "#0da338"
    }}>
      <Style.Header>
        <h2>
          {props.type === "Saída" 
            ? "- " 
            : "+ "
          } R$ {props.value.toString().replace('.',',')}
        </h2>
        <p>{props.createdAt}</p>
      </Style.Header>
      <h3>{props.category}</h3>
      <p>{props.description}</p>
      <Style.Footer>
        <IconButton
          onClick={props.onEdit}
          icon={<EditIcon />}
          size="lg"
          style={{ 
            borderRadius: 4, 
            border: "none",
            cursor: "pointer"
          }}
        />
        <IconButton
          onClick={props.onDelete}
          icon={<TrashIcon />}
          size="lg"
          style={{ 
            borderRadius: 4, 
            border: "none",
            cursor: "pointer"
          }}
        />
      </Style.Footer>
    </Style.Container>
  )
}

