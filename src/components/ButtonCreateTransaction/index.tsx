import * as Style from './styles'
import AddOutlineIcon from '@rsuite/icons/AddOutline'

type ButtonCreateProps = {
  onClick: () => void;
}

export const ButtonCreateTransaction = (props: ButtonCreateProps) => {
  return (
    <Style.Button 
      icon={<AddOutlineIcon color="#fff" />} 
      circle 
      size="lg" 
      onClick={props.onClick}
    />
  )
}