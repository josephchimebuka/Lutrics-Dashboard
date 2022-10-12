import React from 'react'

const FormRow = ({name, value, handleChange, labelText, type}) => {
  return (
    <div>
      <div className='form-row'>
            <label htmlFor={name} className='form-label'>{name}</label>
            <input type={type}
            className='form-input'
            name={name}
            value={value}
            onChange={handleChange}
            />
          </div>
    </div>
  )
}

export default FormRow
