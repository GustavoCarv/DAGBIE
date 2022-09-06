import { 
  Modal, 
  DateRangePicker, 
  SelectPicker, 
  Button,
} from 'rsuite'
import * as Style from './styles'

export const FiltersTransactionsModal = () => {
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
  );
  return (
    <Style.Container open={ true } onClose={() => alert('fechar')}> 
      <Modal.Header>
        <Modal.Title style={{ margin: '30px 0'}}>Filtrar por: </Modal.Title>
      </Modal.Header>
      <DateRangePicker 
        appearance='default' 
        placeholder='Data' 
        style={{ width: 250, marginBottom: 30 }} 
      />
      <SelectPicker 
        data={dataType} 
        style={{ width: 250, marginBottom: 30 }} 
        placeholder='Tipo (Entrada / Saída)'
        searchable={false}
      />
      <SelectPicker 
        data={dataCategory} 
        style={{ width: 250, marginBottom: 30 }} 
        placeholder='Categoria'
        searchable={false}
      />
      <Button 
        appearance='primary'
        style={{ width: 250, marginBottom: 20, background: '#26F05F' }} 
        active
      >
        <strong>Aplicar</strong>
      </Button>
    </Style.Container>
  )
} 