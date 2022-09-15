import * as Style from './styles'
import DashboardIcon from '@rsuite/icons/Dashboard';

type ContainerGeneralProps = {
  title: string;
  children: React.ReactNode;
  hasCalendar?: boolean;
}

export const ContainerGeneral = (props: ContainerGeneralProps) => {
  return (
    <Style.Container>
      <Style.TitleContainer>
        <DashboardIcon color='#00453a' style={{ fontSize: '2em' }} />
        <Style.CardTitleHome>{props.title}</Style.CardTitleHome>
      </Style.TitleContainer>
      {props.children}
    </Style.Container>
  )
}