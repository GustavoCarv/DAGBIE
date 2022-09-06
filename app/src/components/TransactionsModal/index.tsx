import { Modal } from 'rsuite'
import * as Style from './styles'
import { TransactionCard } from '../TransactionCard'
import { Transaction } from '../../interfaces/transaction'

type TransactionsType = {
  transactions: Transaction[];
  open: boolean;
  showEdit: boolean; 
  showConfirmDelete: boolean; 
};

export const TransactionsModal = (props: TransactionsType) => {
  return (
    <Modal
      open={props.open}
      onClose={() => props.open = false}
      style={{
        width: '95%',
        margin: '20px 2% 0 3%',
        background: '#f2f2f2',
        padding: 5,
      }}
    >
      <Modal.Header>
        <Modal.Title
          style={{
            textAlign: 'center',
            margin: '-20px 0 20px 0 ',
          }}
        >
          <h1>Transações</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Style.CardsContainer>
          {props.transactions &&
            props.transactions.map((transaction) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  value={transaction.value}
                  type={transaction.type}
                  createdAt={transaction.createdAt}
                  category={transaction.category}
                  description={transaction.description}
                  onEdit={() => props.showEdit = true}
                  onDelete={() => props.showConfirmDelete = true}
                />
              );
          })}
        </Style.CardsContainer>
      </Modal.Body>
      {props.showEdit === true && <p>modal para editar aqui</p>}
      {props.showConfirmDelete === true && <p>modal para excluir aqui</p>}
    </Modal>
  )
}
