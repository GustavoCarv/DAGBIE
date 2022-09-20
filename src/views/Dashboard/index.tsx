import { useState, useEffect } from 'react'
import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import { BalanceChart } from '../../components/BalanceChart'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LastWeekTransactionsCard } from '../../components/LastWeekTransactionsCard'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { TransactionsModal } from '../../components/TransactionsModal'
import api from '../../services/api'
import { Transaction } from '../../interfaces/transaction'

const Dashboard = () => {
  const navigate = useNavigate()
  const [ showTransactions, setShowTransactions ] = useState(false)
  const [ transactions, setTransactions ] = useState<Transaction[]>([])
  const getTransactions = async () => {
    await api.get('/transactions')
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
      <Header />
      <Style.WelcomeUser>
        <h3>Olá, Antônio</h3>
        <Style.ButtonT 
          size="lg"
          onClick={() => navigate('/registro/transacao')}
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
      <ButtonCreateTransaction />
      <TransactionsModal
        open={showTransactions}
        onClose={() => setShowTransactions(false)}
      />
      <Footer />
    </Style.Container>
  )
}

export default Dashboard
