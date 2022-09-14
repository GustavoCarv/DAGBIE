import React, { useState } from 'react'
import { Button } from 'rsuite'
import { BalanceChart } from '../../components/BalanceChart'
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
      <div style={{height:70, width:"100%", background:"green"}}>Header teste</div>
      <div style={{maxWidth:720, margin:'auto', height:70, display:"flex", justifyContent:"spaceBeetwen", alignItems:"flex-end"}}>
        <h3 style={{color:"#495057"}}>Olá, Antônio</h3>
        <Button 
          appearance='ghost'
          size="lg"
          style={{ 
            borderRadius: 12,  
            color: '#495057', 
            borderColor: '#495057', 
            alignSelf: 'center', 
            marginTop: 8,
          }} 
          onClick={() => setShowCreateTransaction(true)}
        >
          Nova transação
        </Button>
      </div>
      <BalanceChart 
        entry={987}
        exit={1900}
        total={32}
        onOpenExtract={() => setShowTransactions(true)}
      />
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
    </Styles.Container>
  )
}

export default Dashboard
