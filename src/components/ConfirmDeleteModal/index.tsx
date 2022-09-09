import { Button } from 'rsuite'
import * as Style from './styles'

type DeleteProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  onAccept: () => void;
}

export const ConfirmDeleteModal = (props: DeleteProps) => {
  return (
    <Style.Container open={ props.open } onClose={ props.onClose }>
      <Style.Header>
        <h5>{ props.title }</h5>
      </Style.Header>
      <Style.Footer>
        <Button
          style={{ marginBottom: '5px', background: '#A31515' }} 
          onClick={ props.onAccept }
          appearance='primary'
        >
          Excluir
        </Button>
        <Button 
          style={{ marginBottom: '5px', background: '#F2F2F2', color: '#000' }}
          onClick={ props.onClose } 
          appearance='subtle'
        >
          Cancelar
        </Button>
      </Style.Footer>
    </Style.Container>
  )
}
