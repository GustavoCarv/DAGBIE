import React from 'react'

export const formatNumberToCurrencyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1, $2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
  e.target.value = value
  return e
}

export const formatNumberToCurrencyOutput = (value: number) => {
  const valueInput = value
  const newValueInput = valueInput.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return newValueInput
}

export const formatCurrencyToNumber = (currency: string) => {
  const valueInput = currency
  const newValueInput = valueInput.replace(/[^0-9,]*/g, '').replace(',','.')
  const newValueInputN = parseFloat(newValueInput)
  return newValueInputN
}