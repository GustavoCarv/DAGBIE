import React, { useState, ChangeEvent } from 'react'
import * as Style from './styles'
import { useNavigate } from 'react-router-dom'
import { 
  formatNumberToCurrencyInput, 
  formatCurrencyToNumber, 
} from '../../utils/formatCurrency'
import api from '../../services/api'
import { Form, ButtonToolbar } from 'rsuite'

const CreateTransaction = () => {
  const navigate = useNavigate()
  const [ value, setValue ] = useState({ value: '' })
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const createTransaction = async () => {
    if(value.value === '' || type === '' || category === '') {
      alert('Por favor, preencha os campos obrigatórios!')
    } else {
      const newValue = formatCurrencyToNumber(value.value)
      const body = {
        value: newValue, 
        type: type, 
        category: category, 
        description: description,
        createdAt: new Date(Date.now()), // TODO: excluir essa linha quando tiver com a api de verdade
      } 
      await api.post('/transactions', body)
        .then(() => {
          alert('Transação criada com sucesso!')
          navigate('/dashboard')
        })
        .catch(() => {alert('Ops, algo deu errado, tente novamente')})
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
    <Style.Container>
      <Style.Header>
        <Style.Title>Registrar transação</Style.Title>
      </Style.Header>
      <Style.FormContainer>
        <Form.Group controlId='value'>
          <Form.ControlLabel >Valor: <span>*</span></Form.ControlLabel>
          <Style.Input
            name='value' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              changeValue(formatNumberToCurrencyInput(e))
            }}
            value={value.value}
            required
          />
        </Form.Group>
        <Form.Group controlId='type'>
          <Form.ControlLabel>Tipo (Entrada / Saída): <span>*</span></Form.ControlLabel>
          <Style.Select
            name='type' 
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
            name='category' 
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
              name='description' 
              rows={3}
              onChange={e => setDescription(e.target.value)}
              value={description}
              required
            />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar style={{ float:'right' }}>
            <Style.ButtonR  
              onClick={createTransaction}
            >
              Salvar
            </Style.ButtonR>
            <Style.ButtonC  
              appearance='ghost' 
              onClick={() => navigate('/dashboard')}
            >
              Cancelar
            </Style.ButtonC>
          </ButtonToolbar>
        </Form.Group>
      </Style.FormContainer>
    </Style.Container>
  )
}

export default CreateTransaction
