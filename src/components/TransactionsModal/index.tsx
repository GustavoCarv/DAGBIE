import React, { useState } from 'react'
import { Modal, Button } from 'rsuite'
import * as Style from './styles'
import { TransactionCard } from '../TransactionCard'
import { Transaction } from '../../interfaces/transaction'

type TransactionsType = {
  transactions: Transaction[];
  open: boolean;
};

export const TransactionsModal = (props: TransactionsType) => {
  const [ showFilters, setShowFilters ] = useState<boolean>(false)
  const [ showEdit, setShowEdit ] = useState<boolean>(false)
  const [ showConfirmDelete, setShowConfirmDelete ] = useState<boolean>(false)
  return (
    <Modal
      open={props.open}
      onClose={() => props.open = false}
      style={{
        width: '95%',
        margin: '20px 2.5%',
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
        <Button 
          appearance='primary'
          style={{ width: 70, background: '#26F05F' }} 
          active
          onClick={() => setShowFilters(true)}
        > 
          Filtrar
        </Button>
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
                  onEdit={() => setShowEdit(true)}
                  onDelete={() => setShowConfirmDelete(true)}
                />
              );
          })}
        </Style.CardsContainer>
      </Modal.Body>
      {showFilters === true && (
        <p>modal de filtros aqui</p>
      )}
      {showEdit === true && (
        <p>modal para editar aqui</p>
      )}
      {showConfirmDelete === true && (
        <p>modal para excluir aqui</p>
      )}
    </Modal>
  )
}
