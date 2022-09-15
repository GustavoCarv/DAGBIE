import React, { useState } from 'react'
import * as Style from './styles'
import { 
  formatNumberToCurrencyInput, 
  formatCurrencyToNumber, 
} from '../../utils/formatCurrency'
import api from '../../services/api'
import { Form, ButtonToolbar } from 'rsuite'

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
  const createTransaction = () => {
    if(value.value === '' || type === '' || category === '') {
      alert('Por favor, preencha os campos obrigatórios!')
    } else {
      const newValue = formatCurrencyToNumber(value.value)
      const body = {
        value: newValue, 
        type, 
        category, 
        description,
        createdAt: new Date(Date.now()), // excluir essa linha quando tiver com a api de verdade
      } 
      api.post('/transactions', body)
        .then(() => alert('Transação criada com sucesso!'))
        .catch(() => alert('Ops, algo deu errado, tente novamente'))
      setValue({value: ''})
      setType('')
      setCategory('')
      setDescription('')
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
            <Style.ButtonR  
              onClick={createTransaction}
            >
              Registrar
            </Style.ButtonR>
            <Style.ButtonC 
              appearance='ghost'
              onClick={props.onClose}
            >
              Cancelar
            </Style.ButtonC>
          </ButtonToolbar>
        </Form.Group>
      </Style.FormContainer>
    </Style.Container>
  )
}

