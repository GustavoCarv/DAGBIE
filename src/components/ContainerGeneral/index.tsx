import * as Style from './styles'
import CreditCardPlusIcon from '@rsuite/icons/CreditCardPlus';

type ContainerGeneralProps = {
  title: string;
  children: React.ReactNode;
  hasCalendar?: boolean;
}

export const ContainerGeneral = (props: ContainerGeneralProps) => {
  return (
    <Style.Container>
      <Style.TitleContainer>
        <CreditCardPlusIcon color='#00453a' style={{ fontSize: '2em' }} />
        <Style.CardTitleHome>{props.title}</Style.CardTitleHome>
      </Style.TitleContainer>
      {props.children}
    </Style.Container>
  )
}