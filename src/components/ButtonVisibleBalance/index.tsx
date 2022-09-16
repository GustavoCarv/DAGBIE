import VisibleIcon from '@rsuite/icons/Visible';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import * as Style from './styles'

type ButtonVisibleProps = {
  visible: boolean;
  onClick: () => void;
}

export const ButtonVisibleBalance = (props: ButtonVisibleProps) => {
  return (
    <Style.Button>
      {props.visible 
        ? <VisibleIcon 
            style={{fontSize: '1.7em', color: '#00453A', cursor: 'pointer'}} 
            onClick={props.onClick} 
          /> 
        : <EyeCloseIcon 
            style={{fontSize: '1.7em', color: '#00453A', cursor: 'pointer' }} 
            onClick={props.onClick}
          />
      } 
    </Style.Button>
  )
}