
import { InputGroup } from 'rsuite'
import VisibleIcon from '@rsuite/icons/Visible'
import UnvisibleIcon from '@rsuite/icons/Unvisible'

type FeedbackProps = {
  showPassword: boolean;
  setShowPassword: (password: boolean) => void;
}

export const VisibleIconPassword = (props: FeedbackProps) => {

  return (
    <InputGroup.Addon
      style={{
        top: '50%',
        transform: 'translate(0, -50%)',
      }}
      onClick={() => {
        props.setShowPassword(!props.showPassword)
      }}
    >
      {props.showPassword ? (
        <VisibleIcon
          style={{
            fill: '#00453A',
          }}
        />
      ) : (
      <UnvisibleIcon
        style={{
          fill: '#00453A',
        }}
      />
      )}
    </InputGroup.Addon>
  )
}