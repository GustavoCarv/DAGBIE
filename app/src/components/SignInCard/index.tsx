import * as Style from './styles'

type SignInCardProps = {
  title: string
  children?: React.ReactNode
}

const SignInCard: React.FC<SignInCardProps> = ({ title, children }) => {
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

export default SignInCard
