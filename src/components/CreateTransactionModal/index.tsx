import * as Style from './styles'
import { Form, ButtonToolbar, Button, SelectPicker, Input } from 'rsuite'

type ModalProps = {
  open: boolean;
  onClose: () => void;
  createTransaction: () => void;
 }

export const CreateTransactionModal = (props: ModalProps) => {
  const dataType = ['Entrada', 'Saída'].map(
    item => ({ label: item, value: item }),
  )
  const dataCategory = [
    'Casa',
    'Investimento',
    'Viagem',
    'Saúde',
    'Educação',
    'Compras',
    'Outro',
  ].map(
    item => ({ label: item, value: item }),
  )
  return (
    <Style.Container
      open={ props.open }
      onClose={ props.onClose }
    >
      <Style.Header>
        <Style.Title>Registro de transação</Style.Title>
      </Style.Header>
      <Style.FormContainer>
        <Form.Group controlId='value'>
          <Form.ControlLabel >Valor:</Form.ControlLabel>
          <Form.Control name='value' type='number' />
        </Form.Group>
        <Form.Group controlId='type'>
          <Form.ControlLabel>Tipo (Entrada / Saída):</Form.ControlLabel>
          <SelectPicker 
            data={dataType} 
            searchable={false}
            style={{ width: '100%' }}
          />
        </Form.Group>
        <Form.Group controlId='category'>
          <Form.ControlLabel>Categoria:</Form.ControlLabel>
          <SelectPicker 
            data={dataCategory} 
            searchable={false}
            style={{ width: '100%' }}
          />
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.ControlLabel>Descrição (opcional):</Form.ControlLabel>
            <Input 
              name='description'
              as='textarea'
              rows={3} 
            />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button 
              appearance='primary' 
              style={{ background: '#0DA338' }}
              onClick={ props.createTransaction }
            >
              Registrar
            </Button>
            <Button 
              appearance='default'
              onClick={props.onClose}
            >
              Cancelar
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Style.FormContainer>
    </Style.Container>
  )
}

