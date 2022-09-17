import { Button, Modal } from 'rsuite'
import * as Style from '../ConfirmDeleteModal/styles'

type FeedbackProps = {
  open: boolean;
  title: string;
  description?: string;
  onAccept: () => void;
  onClose: () => void;
}

export const FeedbackTransactionModal = (props: FeedbackProps) => {
  return (
    <Style.Container open={ props.open } onClose={ props.onClose }>
      <Style.Header>
        <h5>{ props.title }</h5>
      </Style.Header>
      <Modal.Body>
          <p>{props.description}</p>
      </Modal.Body>
      <Style.Footer>
        <Button
          style={{ marginBottom: '5px', background: '#00856F' }}
          onClick={ props.onAccept }
          appearance='primary'
        >
          OK
        </Button>
      </Style.Footer>
    </Style.Container>
  )
}
