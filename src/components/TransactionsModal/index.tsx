import { useState } from 'react'
import { Modal } from 'rsuite'
import * as Style from './styles'
import { TransactionCard } from '../TransactionCard'
import { FiltersTransactionsModal } from '../FiltersTransactionsModal'
import { Transaction } from '../../interfaces/transaction'
import { ConfirmDeleteModal } from '../ConfirmDeleteModal'

type TransactionsProps = {
  transactions: Transaction[];
  open: boolean;
  onClose: () => void;
}

export const TransactionsModal = (props: TransactionsProps) => {
  const [ showFilters, setShowFilters ] = useState<boolean>(false)
  const [ showEdit, setShowEdit ] = useState<boolean>(false)
  const [ showConfirmDelete, setShowConfirmDelete ] = useState<boolean>(false)
  return (
    <Style.Container
      open={props.open}
      onClose={props.onClose}
      style={{
        width: '95%',
        margin: '20px 2.5%',
      }}
    >
      <Style.Header>
        <Style.ModalTitle>
          <h2>Transações</h2>
        </Style.ModalTitle>
        <Style.FilterButton 
          active
          onClick={() => setShowFilters(true)}
        > 
          <strong>Filtrar</strong>
        </Style.FilterButton>
      </Style.Header>
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
                  onEdit={() => setShowEdit(true)}
                  onDelete={() => setShowConfirmDelete(true)}
                />
              );
          })}
        </Style.CardsContainer>
      </Modal.Body>
      {showFilters === true && (
        <FiltersTransactionsModal 
          open={ showFilters }
          onClose={ () => setShowFilters(false) }
        />
      )}
      {showEdit === true && (
        {/* Modal de edição aqui */}
      )}
      {showConfirmDelete === true && (
        <ConfirmDeleteModal 
          open={ showConfirmDelete }
          title='Tem certeza que deseja excluir a transação?'
          onClose={ () => setShowConfirmDelete(false) }
          onAccept={ () => alert('Funcionalidade de exclusão em andamento...') }
        />
      )}
    </Style.Container>
  )
}
