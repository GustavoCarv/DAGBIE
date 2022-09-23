import { useState, useEffect } from 'react'
import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import { Modal, Form } from 'rsuite'
import api from '../../services/api'
import { TransactionCard } from '../TransactionCard'
import { Transaction } from '../../interfaces/transaction'

type TransactionsProps = {
  open: boolean;
  onClose: () => void;
}

export const TransactionsModal = (props: TransactionsProps) => {
  const navigate = useNavigate()
  const [ showFilters, setShowFilters ] = useState(false)
  const [ transactions, setTransactions ] = useState<Transaction[]>([])
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  // const [ userId, setUserId ] = useState(0)
  const categories = [
    'Casa',
    'Investimento',
    'Viagem',
    'Saúde',
    'Educação',
    'Compras',
    'Outro',
  ]
  // const getUserNew = () => {
  //   const userLogged = localStorage.getItem("user")
  //   if(userLogged) {
  //     const foundUser = JSON.parse(userLogged);
  //     setUserId(foundUser.id_usuario)
  //   }
  // }
  // console.log(userId)
  const getTransactions = async () => {
    await api.get(`/list_transactions?id_usuario=1`)
      .then(res => setTransactions(res.data.lista_transacoes))
      .catch(err => console.error(err.message))
  }
  const deleteTransaction = async (id?: number) => {
    await api.post(`del_transaction`, { id_transacao: id })
      .then(() => {
        alert('Transação excluída com sucesso')
      })
      .catch(() => alert('Ops, algo deu errado, tente novamente'))
  }
  const filterTransactions = () => {
    let newTransactions;
    if(type === '' && category === '') {
      alert('Para filtrar é necessário preencher pelo menos um campo')
    } else if (category === '') {
      newTransactions = transactions.filter(t => t.tipo == type)
      setShowFilters(false)
    } else if (type === '') {
      newTransactions = transactions.filter(t => t.categoria == category)
      setShowFilters(false)
    } else {
      newTransactions = transactions
        .filter(t => t.tipo == type)
        .filter(t => t.categoria == category)
      setShowFilters(false)
    }
    if (newTransactions) {
      setTransactions(newTransactions)
    }
  }
  useEffect(() => {
    getTransactions()
    // getUserNew()
  }, [])  
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
            appearance='ghost' 
            onClick={() => {
              setShowFilters(true)
              getTransactions()
            }}
          > 
            <strong>Filtrar</strong>
          </Style.FilterButton>
      </Style.Header>
      <Modal.Body>
        <Style.CardsContainer>
          {transactions.length !== 0 
            ? (
              transactions.map((t) => {
                return (
                  <TransactionCard
                    key={t.id_transacao}
                    valor={t.valor}
                    tipo={t.tipo}
                    data_criacao={t.data_criacao}
                    categoria={t.categoria}
                    descricao={t.descricao}
                    onEdit={() => navigate(`/edicao/transacao/${t.id_transacao}`)}
                    onDelete={() => {
                      deleteTransaction(t?.id_transacao)
                      getTransactions()
                    }}
                  />
                )
              })
            ) : (
              <h4>Não há transações</h4>
            )
          }
        </Style.CardsContainer>
      </Modal.Body>
      {showFilters && (
        <Style.ContainerFilter 
        open={ showFilters } 
        onClose={() => {setShowFilters(false)}}
      > 
        <Modal.Header>
          <Modal.Title style={{ margin: '30px 0'}}>Filtrar por: </Modal.Title>
        </Modal.Header>
        <Form.Group controlId='type' style={{ marginBottom: 20, textAlign: 'left' }}>
          <Form.ControlLabel>Tipo (Entrada / Saída)</Form.ControlLabel>
          <Style.Select
            name='type' 
            onChange={e => setType(e.target.value)}
            value={type}
          >
            <option value=''></option>
            <option value='Entrada'>Entrada</option>
            <option value='Saída'>Saída</option>
          </Style.Select>
        </Form.Group>
        <Form.Group controlId='category' style={{ marginBottom: 40, textAlign: 'left' }}>
          <Form.ControlLabel>Categoria</Form.ControlLabel>
          <Style.Select
            name='category' 
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            <option value=''></option>
            {categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </Style.Select>
        </Form.Group>
        <Style.ButtonT
          style={{ width: 250, marginBottom: 20 }} 
          active
          onClick={() => filterTransactions()}
        >
          <strong>Aplicar</strong>
        </Style.ButtonT>
      </Style.ContainerFilter>
      )}
    </Style.Container>
  )
}
