import React from 'react'
import PropTypes from 'prop-types'
import FormRow from './FormRow'
import FieldError from './FieldError'

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

const TextField = ({ error, label, required, touched, ...rest }) => (
  <FormRow>
    {label && (
      <label style={labelStyle}>
        {label} {required && <span>*</span>}
      </label>
    )}
    <input
      type="text"
      {...rest}
      style={touched && error ? fieldErrStyle : fieldStyle}
    />
    {touched && error && <FieldError />}
  </FormRow>
)

// Field.displayName = 'Field'

TextField.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool.isRequired,
  touched: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField
