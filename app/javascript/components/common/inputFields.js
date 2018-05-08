import React from 'react'

const InputComponent = ({gridClassName, fieldClassName, labelClassName,
  id, label, onChange, value, placeholder, type, maxLength, onBlur}) => (
  <div className={gridClassName}>
    {/* <span style={{whiteSpace: 'noWrap'}}> */}
    <label className={labelClassName} htmlFor={id}>{label}</label>
    <input className={fieldClassName}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={maxLength}
    />
    {/* </span> */}
  </div>
)

export {InputComponent}
