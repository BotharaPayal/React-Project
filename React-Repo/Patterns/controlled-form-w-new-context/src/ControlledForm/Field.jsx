import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'
import FieldError from './FieldError'
import FormContext from './FormContext'

const labelStyle = {
  display: 'block',
  marginBottom: '8px'
}

const fieldStyle = {
  width: '100%',
  height: '36px',
  border: '1px solid #999',
  fontSize: '1rem',
  paddingLeft: '8px'
}

const fieldErrStyle = {
  ...fieldStyle,
  borderColor: 'red'
}

const TextField = ({ label, name, type }) => (
  <FormContext.Consumer>
    {({ fields, handlers }) => {
      const { error, required, touched, ...rest } = fields[name]
      return (
        <FormRow>
          {label && (
            <label style={labelStyle}>
              {label} {required && <span>*</span>}
            </label>
          )}
          <input
            type={type}
            name={name}
            {...rest}
            {...handlers}
            style={touched && error ? fieldErrStyle : fieldStyle}
          />
          {touched && error && <FieldError />}
        </FormRow>
      )
    }}
  </FormContext.Consumer>
)

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField
