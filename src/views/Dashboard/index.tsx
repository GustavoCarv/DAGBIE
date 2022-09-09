import { useState } from 'react'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { CreateTransactionModal } from '../../components/CreateTransactionModal'
import * as Styles from './styles'

const Dashboard = () => {
  const [ showCreateTransaction, setShowCreateTransaction ] = useState<boolean>(false);
  return (
    <Styles.Container>
      <ButtonCreateTransaction 
        onClick={() => setShowCreateTransaction(true)}
      />
      {showCreateTransaction && (
        <CreateTransactionModal 
          open={showCreateTransaction}
          onClose={() => setShowCreateTransaction(false)} 
          createTransaction={() => alert('Função para criar transação não está pronta')}
        />
      )}
    </Styles.Container>
  )
}

export default Dashboard
