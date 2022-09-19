import * as Styles from './styles'
import LOGO from '../../assets/dagbie_full_logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 4000)
  }, [])

  return (
    <Styles.Container>
      <img src={LOGO} width={508} height={180} />
    </Styles.Container>
  )
}

export default Home
