import React, { useState } from 'react'
import * as Style from './styles'
import { 
  formatNumberToCurrencyInput, 
  formatCurrencyToNumber, 
} from '../../utils/formatCurrency'
import { Form, ButtonToolbar, Button } from 'rsuite'

type ModalProps = {
  open: boolean;
  onClose: () => void;
 }

export const CreateTransactionModal = (props: ModalProps) => {
  const [ value, setValue ] = useState({value: ''})
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    if(value.value === '' || type === '' || category === '') {
      alert('Por favor, preencha os campos obrigatórios!')
    } else {
      const newValue = formatCurrencyToNumber(value.value)
      // const body = {
      //   value: newValue, type, category, description,
      // }
      // api.post aqui
      // TODO: apagar esse alert após fazer o create da api
      alert(`${newValue}, ${type}, ${category}, ${description}`)
    }
  }
  const categories = [
    'Casa',
    'Investimento',
    'Viagem',
    'Saúde',
    'Educação',
    'Compras',
    'Outro',
  ]
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
          <Form.ControlLabel >Valor: <span>*</span></Form.ControlLabel>
          <Style.Input
            name='value' 
            onChange={e => changeValue(formatNumberToCurrencyInput(e))}
            value={value.value}
            required
          />
        </Form.Group>
        <Form.Group controlId='type'>
          <Form.ControlLabel>Tipo (Entrada / Saída): <span>*</span></Form.ControlLabel>
          <Style.Select
            onChange={e => setType(e.target.value)}
            value={type}
          >
            <option value=''></option>
            <option value='Entrada'>Entrada</option>
            <option value='Saída'>Saída</option>
          </Style.Select>
        </Form.Group>
        <Form.Group controlId='category'>
          <Form.ControlLabel>Categoria: <span>*</span></Form.ControlLabel>
          <Style.Select
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            <option value=''></option>
            {categories.map(category => (
              <option value={category}>{category}</option>
            ))}
          </Style.Select>
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.ControlLabel>Descrição (opcional):</Form.ControlLabel>
            <Style.Textarea
              rows={3}
              onChange={e => setDescription(e.target.value)}
              value={description}
              required
            />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button 
              appearance='primary' 
              style={{ background: '#0DA338' }}
              onClick={ () => handleSubmit() }
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

