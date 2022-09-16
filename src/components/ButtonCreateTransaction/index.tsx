import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import AddOutlineIcon from '@rsuite/icons/AddOutline'

export const ButtonCreateTransaction = () => {
  const navigate = useNavigate()
  return (
    <Style.Button 
      icon={<AddOutlineIcon color="#fff" />} 
      circle 
      size="lg"
      onClick={() => navigate('/registro/transacao')}
    />
  )
}