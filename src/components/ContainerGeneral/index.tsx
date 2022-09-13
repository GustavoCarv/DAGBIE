import * as Style from './styles'
import CreditCardMinusIcon from '@rsuite/icons/CreditCardMinus';

type ContainerGeneralProps = {
  title: string;
  children: React.ReactNode;
}

export const ContainerGeneral = (props: ContainerGeneralProps) => {
  return (
    <Style.Container>
      <Style.TitleContainer>
        <CreditCardMinusIcon color='green' />
        <Style.CardTitleHome>{props.title}</Style.CardTitleHome>
      </Style.TitleContainer>
      {props.children}
    </Style.Container>
  )
}