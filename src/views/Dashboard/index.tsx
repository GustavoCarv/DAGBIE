import React, { useState } from 'react'
import { BalanceChart } from '../../components/BalanceChart'
import { LastWeekTransactionsCard } from '../../components/LastWeekTransactionsCard'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { CreateTransactionModal } from '../../components/CreateTransactionModal'
import { TransactionsModal } from '../../components/TransactionsModal'
import { transactions } from '../../db'
import * as Style from './styles'

const Dashboard = () => {
  const [ showCreateTransaction, setShowCreateTransaction ] = useState<boolean>(false)
  const [ showTransactions, setShowTransactions ] = useState<boolean>(false)
  return ( 
    <Style.Container>
      <div style={{height:70, width:"100%", background:"green", color: '#fff'}}>Header teste</div>
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
        entry={987}
        exit={1900}
        total={32}
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
      <div style={{height:60, width:"100%", background:"green", color: '#fff'}}>Footer teste</div>
    </Style.Container>
  )
}

export default Dashboard
