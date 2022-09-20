import { useNavigate } from 'react-router-dom'
import PageIcon from '@rsuite/icons/Page'
import HomeIcon from '../../assets/home-icon.png'
import UserIcon from '../../assets/user-icon.png'
import * as Style from './styles'

export const Footer = () => {
  const navigate = useNavigate()
  return (
    <>  
      <Style.Container>
       <Style.Option onClick={() => navigate('/dashboard')} >
          <img 
            style={{ width: 23 }}
            src={HomeIcon} 
            alt='Ícone de início' 
          />
          <p>Início</p>
        </Style.Option>
        <Style.Option onClick={() => navigate('/registro/transacao')}>
          <PageIcon style={{ fontSize: '1.5em' }}/>
          <p>Registrar</p>
        </Style.Option>
        <Style.Option onClick={() => alert('ir para perfil de usuário')} >
          <img 
            className='userIcon'
            src={UserIcon} 
            alt='Ícone de usuário' 
          />
          <p>Perfil</p>
        </Style.Option>
      </Style.Container>
      <Style.FooterDesktop>
        <p>dagbie financeira LTDA, 2022</p>
      </Style.FooterDesktop>
    </>
  )
}