import React from 'react'

import '../index.css'
const TextField = (props) => {
    const {
        name,
        label,
        isRequired = false,
        type = 'text',
        placeholder,
        onChange,
    } = props
    return (
        <div className="input-field">
            <label htmlFor="">
                {label}
                {isRequired && <span className="required"> *</span>}
            </label>
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                className="input"
            />
        </div>
    )
}

export default TextField
