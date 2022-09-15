import React, { useState, useEffect } from 'react'
import { BalanceChart } from '../../components/BalanceChart'
import { LastWeekTransactionsCard } from '../../components/LastWeekTransactionsCard'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { CreateTransactionModal } from '../../components/CreateTransactionModal'
import { TransactionsModal } from '../../components/TransactionsModal'
import api from '../../services/api'
import { Transaction } from '../../interfaces/transaction'
import * as Style from './styles'

const Dashboard = () => {
  const [ showCreateTransaction, setShowCreateTransaction ] = useState(false)
  const [ showTransactions, setShowTransactions ] = useState(false)
  const [ transactions, setTransactions ] = useState<Transaction[]>([])
  const getTransactions = () => {
    api.get('/transactions')
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err.message))
  }
  useEffect(() => {
    getTransactions()
  }, [transactions])
  const inputValue = transactions
    .filter(t => (t.type === 'Entrada'))
    .reduce((result, amount) => {
    return result + amount.value
  }, 0)
  const outputValue = transactions
    .filter(t => (t.type === 'Saída'))
    .reduce((result, amount) => {
    return result + amount.value
  }, 0)
  const totalValue = inputValue - outputValue
  return ( 
    <Style.Container>
      <div style={{height:60, width:"100%", background:"green", color: '#fff', position: 'fixed', top:0, zIndex:10 }}>Header teste</div>
      <Style.WelcomeUser>
        <h3>Olá, Antônio</h3>
        <Style.ButtonT 
          size="lg"
          onClick={() => setShowCreateTransaction(true)}
        >
          Nova transação
        </Style.ButtonT>
      </Style.WelcomeUser>
      <BalanceChart 
        entry={inputValue}
        exit={outputValue}
        total={totalValue}
        onOpenExtract={() => setShowTransactions(true)}
      />
      <LastWeekTransactionsCard transactions={transactions} />
      <ButtonCreateTransaction 
        onClick={() => setShowCreateTransaction(true)}
      />
      <CreateTransactionModal 
        open={showCreateTransaction}
        onClose={() => setShowCreateTransaction(false)} 
      />
      <TransactionsModal
        transactions={transactions}
        open={showTransactions}
        onClose={() => setShowTransactions(false)}
      />
      <div style={{height:50, width:"100%", background:"green", color: '#fff' }}>Footer teste</div>
    </Style.Container>
  )
}

export default Dashboard
