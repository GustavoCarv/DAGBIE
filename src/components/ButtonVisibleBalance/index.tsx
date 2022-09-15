import VisibleIcon from '@rsuite/icons/Visible';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import * as Style from './styles'

type ButtonVisibleProps = {
  visible: boolean;
  onClick: () => void;
}

export const ButtonVisibleBalance = (props: ButtonVisibleProps) => {
  return (
    <Style.Button 
      icon={props.visible ? 
        <VisibleIcon style={{fontSize: '1.5em', color: '#fff'}} /> :
        <EyeCloseIcon style={{fontSize: '1.5em', color: '#fff'}}/>
      } 
      circle
      size="md" 
      onClick={props.onClick}
    />
  )
}