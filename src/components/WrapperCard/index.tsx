import * as Style from './styles'

type WrapperCardProps = {
  title: string
  children?: React.ReactNode
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children }) => {
  return (
    <Style.Container>
      <Style.FormWrapper>
        <Style.Form>
          <Style.Form>{children}</Style.Form>
        </Style.Form>
      </Style.FormWrapper>
    </Style.Container>
  )
}

export default WrapperCard
