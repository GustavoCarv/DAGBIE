import { useNavigate } from 'react-router-dom'
import ExitIcon from '@rsuite/icons/Exit'
import PageIcon from '@rsuite/icons/Page'
import HomeIcon from '../../assets/home-icon.png'
import UserIcon from '../../assets/user-icon.png'
import Logo from '../../assets/dagbie_full_logo.svg'
import * as Style from './styles'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <Style.Container style={{ position:'fixed' }}>
      <img 
        src={Logo} 
        className='logo'
        alt='Logo do site' 
        onClick={() => navigate('/dashboard')} 
      />
      <Style.HeaderDesktop>
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
        <Style.Option onClick={() => navigate('/perfil')} >
          <img 
            className='userIcon'
            src={UserIcon} 
            alt='Ícone de usuário' 
          />
          <p>Perfil</p>
        </Style.Option>
        <Style.Option onClick={() => navigate('/')}>
          <ExitIcon style={{ fontSize: '1.5em' }} />
          <p>Logout</p>
        </Style.Option>
      </Style.HeaderDesktop>
      <Style.HeaderMobile>
        <Style.Option onClick={() => navigate('/')}>
          <ExitIcon />
          <p>Logout</p>
        </Style.Option>
      </Style.HeaderMobile>
    </Style.Container>
  )
}