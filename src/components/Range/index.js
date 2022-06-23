import * as React from 'react'
import classNames from 'classnames'

import css from './Range.module.css'

function Range (props) {
  const {
    className,
    left,
    right,
    name,
    onChange,
    value
  } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValue = Number(value) / 100
    onChange(nextValue, name)
  }

  const valueToRender = String(value * 100)

  return (
    <div className={classNames(css.range, className)}>
      <span>{left}</span>{' '}
      <span>{right}</span>
      <input
        className={css.control}
        name={name}
        onChange={handleChange}
        type='range'
        value={valueToRender}
      />
    </div>
  )
}

export default Range
