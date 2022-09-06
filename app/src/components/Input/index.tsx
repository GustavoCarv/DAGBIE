import * as Style from './styles'

type InputProps = {
  children?: React.ReactNode
  placeholder?: string
  type?: string
}

const BaseInput: React.FC<InputProps> = ({ children, placeholder, type }) => {
  return (
    <Style.DefaultInputGroup inside>
      {children}
      <Style.DefaultInput placeholder={placeholder} type={type} />
    </Style.DefaultInputGroup>
  )
}

export default BaseInput
