import React, { useState } from 'react'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { CreateTransactionModal } from '../../components/CreateTransactionModal'
import { TransactionsModal } from '../../components/TransactionsModal'
import { transactions } from '../../db'
import * as Styles from './styles'

const Dashboard = () => {
  const [ showCreateTransaction, setShowCreateTransaction ] = useState<boolean>(false)
  const [ showTransactions, setShowTransactions ] = useState<boolean>(false)
  return ( 
    <Styles.Container>
      <button onClick={() => setShowTransactions(true)}>Clique aqui para ver as transações (teste)</button>
      <TransactionsModal
        transactions={transactions}
        open={showTransactions}
        onClose={() => setShowTransactions(false)}
      />
      <ButtonCreateTransaction 
        onClick={() => setShowCreateTransaction(true)}
      />
      {showCreateTransaction && (
        <CreateTransactionModal 
          open={showCreateTransaction}
          onClose={() => setShowCreateTransaction(false)} 
        />
      )}
    </Styles.Container>
  )
}

export default Dashboard
