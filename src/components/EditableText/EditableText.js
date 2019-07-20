// @flow
// libs
import * as React from 'react'
import { FieldProps } from 'formik'

// src
import { useStyles } from './EditableText.styles'

type Props = FieldProps & {
  className?: string,
  fontSize?: number,
  type?: string,
}

export function EditableText(props: Props) {
  const styles = useStyles(props)
  const {
    className,
    field,
    form: {
      values: { isEditable = false },
    },
    fontSize = 15,
    type = 'text',
  } = props

  if (type === 'textarea') {
    return (
      <textarea
        {...field}
        disabled={!isEditable}
        className={[styles.input, className].join(' ')}
      />
    )
  }

  const { value: _value_ } = field
  const c = type === 'date' ? 40 : 0
  const value = !_value_ && type === 'number' ? 0 : _value_

  return (
    <input
      {...field}
      disabled={!isEditable}
      value={value}
      style={{ width: value.toString().length * (fontSize / 2) + c + 'px' }}
      className={[styles.input, className].join(' ')}
      type={type}
    />
  )
}
