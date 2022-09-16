import { useState, useEffect } from 'react'
import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'rsuite'
import api from '../../services/api'
import { TransactionCard } from '../TransactionCard'
import { FiltersTransactionsModal } from '../FiltersTransactionsModal'
import { Transaction } from '../../interfaces/transaction'

type TransactionsProps = {
  open: boolean;
  onClose: () => void;
}

export const TransactionsModal = (props: TransactionsProps) => {
  const navigate = useNavigate()
  const [ showFilters, setShowFilters ] = useState(false)
  const [ transactions, setTransactions ] = useState<Transaction[]>([])
  const getTransactions = async () => {
    await api.get('/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err.message))
  }
  const deleteTransaction = async (id?: number) => {
    await api.delete(`transactions/${id}`)
      .then(() => {
        alert('Transação excluída com sucesso')
      })
      .catch(() => alert('Ops, algo deu errado, tente novamente'))
  }
  useEffect(() => {
    getTransactions()
  }, [transactions])  
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
        {transactions.length !== 0 && (
          <Style.FilterButton 
            appearance='ghost' 
            onClick={() => setShowFilters(true)}
          > 
            <strong>Filtrar</strong>
          </Style.FilterButton>
        )}
      </Style.Header>
      <Modal.Body>
        <Style.CardsContainer>
          {transactions.length !== 0 
            ? (
              transactions.map((t) => {
                return (
                  <TransactionCard
                    key={t.id}
                    value={t.value}
                    type={t.type}
                    createdAt={t.createdAt}
                    category={t.category}
                    description={t.description}
                    onEdit={() => navigate(`/edicao/transacao/${t.id}`)}
                    onDelete={() => deleteTransaction(t?.id)}
                  />
                )
              })
            ) : (
              <h4>Você ainda não possui transações</h4>
            )
          }
        </Style.CardsContainer>
      </Modal.Body>
      <FiltersTransactionsModal 
        open={ showFilters }
        onClose={ () => setShowFilters(false) }
      />
    </Style.Container>
  )
}
