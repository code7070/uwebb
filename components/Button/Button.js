import React from 'react'
import styles from './Button.module.scss'

const getClasName = (classList = '') => {
  const defCls = styles.Button
  const retCls = classList
    ? classList
        .split(' ')
        .map((i) => styles[i])
        .join(' ')
    : ''
  return `${defCls} ${retCls}`
}

export default function Button({
  children,
  text = 'Button',
  type = 'button',
  btnClassName = '',
  rawClassName = '',
  disabled,
  onClick
}) {
  const btnClass = getClasName(btnClassName)
  const rawClass = rawClassName
  const fullCls = `${btnClass} ${rawClass}`

  return (
    <button
      disabled={disabled}
      className={fullCls}
      type={type}
      onClick={onClick}
    >
      {children || text}
    </button>
  )
}
