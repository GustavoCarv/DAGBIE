import React, { useState, useEffect, ChangeEvent } from 'react'
import * as Style from './styles'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, ButtonToolbar } from 'rsuite'
import api from '../../services/api'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { formatNumberToCurrencyInput, formatCurrencyToNumber } from '../../utils/formatCurrency'

type IParamsProps = {
  id: string
}

const EditTransaction = () => {
  const { id } = useParams<IParamsProps>()
  const navigate = useNavigate()
  const [ value, setValue ] = useState({ value: '' })
  const [ type, setType ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const findTransaction = async (id: string) => {
    const res = await api.get(`transactions/${id}`)
    setValue({ value: res.data.value })
    setType(res.data.type)
    setCategory(res.data.category)
    setDescription(res.data.description)
  }
  const editTransaction = async (id?: string) => {
    if (value.value === '' || type === '' || category === '' ) {
      alert('Por favor, preencha os campos obrigatórios.')
    } else {
      const newValue = formatCurrencyToNumber(value.value)
      const body = { 
        value: newValue, 
        type, 
        category, 
        description, 
        createdAt: new Date(Date.now()),  // TODO: excluir esta linha quando estiver com api de verdade
      }
      await api.put(`transactions/${id}`, body)
      .then(() => {
        alert('Transação editada com sucesso!')
        navigate('/dashboard')
      })
      .catch(() => alert('Ops, algo deu errado, tente novamente.'))
    }
  }
  useEffect(() => {
    if(id !== undefined) {
      findTransaction(id)
    }
  }, [id])
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
      <Header />
      <Style.Header>
        <Style.Title>Editar transação</Style.Title>
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
              onClick={() => editTransaction(id)}
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
      <Footer />
    </Style.Container>
  )
}

export default EditTransaction
