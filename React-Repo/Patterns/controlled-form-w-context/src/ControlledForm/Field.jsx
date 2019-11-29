import React from 'react'
import PropTypes from 'prop-types'
import TextField from './TextField'

const Field = ({ name, ...rest }, { fields, handlers }) => (
<TextField name={name} {...rest} {...fields[name]} {...handlers}/>
)

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

Field.contextTypes = {
  fields: PropTypes.object,
  handlers: PropTypes.shape({
    onBlur: PropTypes.func,
    onChanges: PropTypes.func
  })
}

export default Field
