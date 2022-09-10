import * as Style from './styles'

type WrapperCardProps = {
  title: string
  children?: React.ReactNode
}

const WrapperCard: React.FC<WrapperCardProps> = ({ title, children }) => {
  return (
    <Style.Container>
      <Style.FormWrapper>
        <Style.Title>{title}</Style.Title>
        <Style.Form>
          <Style.Form>{children}</Style.Form>
        </Style.Form>
      </Style.FormWrapper>
    </Style.Container>
  )
}

export default WrapperCard
