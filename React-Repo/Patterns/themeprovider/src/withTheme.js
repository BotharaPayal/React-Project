import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import hoistStatics from 'hoist-non-react-statics'

import { CONTEXT_KEY } from './ThemeProvider'
export default function withTheme(WrappedComponent) {
  class ThemeConnect extends React.Component {
    static contextTypes = {
      [CONTEXT_KEY]: PropTypes.shape({
        theme: PropTypes.object,
        changeTheme: PropTypes.func
      })
    }

    static displayName = `withTheme(${getDisplayName(WrappedComponent)})`
    render() {
      return <WrappedComponent {...this.props} {...this.context[CONTEXT_KEY]} />
    }
  }

  hoistStatics(ThemeConnect, WrappedComponent)
  return ThemeConnect
}
