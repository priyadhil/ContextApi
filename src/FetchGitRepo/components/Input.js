import React from 'react'

export default function Input({className, placeholder, type, value, onChange}) {
    return (
        <div className="active-cyan-4 active-cyan-4 m-4 col-xs-6 col-lg-4">
            <input
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
          </div>
    )
}
