import { useState, useEffect, useCallback } from 'react'
import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import { BalanceChart } from '../../components/BalanceChart'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { LastWeekTransactionsCard } from '../../components/LastWeekTransactionsCard'
import { ButtonCreateTransaction } from '../../components/ButtonCreateTransaction'
import { TransactionsModal } from '../../components/TransactionsModal'
import api from '../../services/api'
import { Transaction, ApiGetTransactionsResponse } from '../../interfaces/transaction'

const Dashboard = () => {
    const navigate = useNavigate()
    const [showTransactions, setShowTransactions] = useState(false)
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // const [ userId, setUserId ] = useState('')
    // const getUserNew = () => {
    //   const userLogged = localStorage.getItem('user')
    //   if(userLogged) {
    //     const foundUser = JSON.parse(userLogged);
    //     setUserId(foundUser.id_usuario)
    //   }
    // }

    const getTransactions = useCallback(async () => {
        try {
            const { data } = await api.get<ApiGetTransactionsResponse>(`/list_transactions?id_usuario=1`)

            const { lista_transacoes } = data;

            setTransactions(lista_transacoes);
        } catch (error) {
            const err = new Error(String(error));
            console.log(err.message)
        }
    }, [])

    useEffect(() => {
        getTransactions()
        // getUserNew()
    }, [])

    const inputValue = transactions
        .filter(t => (t.tipo === 'Entrada'))
        .reduce((result, amount) => {
            return result + amount.valor
        }, 0)
    const outputValue = transactions
        .filter(t => (t.tipo === 'Saída'))
        .reduce((result, amount) => {
            return result + amount.valor
        }, 0)
    const totalValue = inputValue - outputValue
    return (
        <Style.Container>
            <Header />
            <Style.WelcomeUser>
                <h3>Olá, Ivan</h3>
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
