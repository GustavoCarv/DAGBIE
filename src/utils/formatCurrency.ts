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
  let newValue = value
  newValue = newValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  })
  return newValue
}

export const formatCurrencyToNumber = (currency: string) => {
  let value = currency
  value = value.replace(/[^0-9,]*/g, '').replace(',','.')
  value = parseFloat(value)
  return value
}