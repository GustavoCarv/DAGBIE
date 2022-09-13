import * as Style from './styles'

import LOGO from '../../assets/dagbie_full_logo.svg'

function LogoComponent() {
  return (
    <Style.Container>
      <img src={LOGO} width={508} height={180} />
    </Style.Container>
  )
}

export default LogoComponent
