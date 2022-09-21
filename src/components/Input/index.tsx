import React, { FocusEvent } from 'react'
import * as Style from './styles'

type InputProps = {
  children?: React.ReactNode
  placeholder?: string
  type?: string
  onChangeEvent: (event: FocusEvent<HTMLInputElement>) => void
  isRequired?: boolean,
  isDisabled?: boolean,
  value?: string
}

const BaseInput: React.FC<InputProps> = ({
  children,
  placeholder,
  type,
  onChangeEvent,
  isRequired,
  isDisabled,
  value,
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
        value={value}
      />
    </Style.DefaultInputGroup>
  )
}

export default BaseInput
