import React, { FocusEvent } from 'react'
import * as Style from './styles'

type InputProps = {
  children?: React.ReactNode
  placeholder?: string
  type?: string
  onChangeEvent: (event: FocusEvent<HTMLInputElement>) => void
  isRequired?: boolean,
  isDisabled?: boolean
}

const BaseInput: React.FC<InputProps> = ({
  children,
  placeholder,
  type,
  onChangeEvent,
  isRequired,
  isDisabled
}) => {
  return (
    <Style.DefaultInputGroup inside>
      {children}
      <Style.DefaultInput
        placeholder={placeholder}
        type={type}
        onBlur={(e: FocusEvent<HTMLInputElement>) => onChangeEvent(e)}
        required={isRequired}
        disabled={isDisabled}
      />
    </Style.DefaultInputGroup>
  )
}

export default BaseInput
