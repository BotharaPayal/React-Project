import React from 'react'
import PropTypes from 'prop-types'

export const CONTEXT_KEY = '__THEME__'

const themes = {
  light: {
    background: 'white',
    color: '#666',
    name: 'light'
  },
  dark: {
    background: 'black',
    color: 'white',
    name: 'dark'
  }
}
export default class ThemeProvider extends React.Component {
  state = {
    theme: 'light'
  }

  static childContextTypes = {
    [CONTEXT_KEY]: PropTypes.shape({
      theme: PropTypes.object,
      changeTheme: PropTypes.func
    })
  }

  changeTheme = theme => {
    this.setState({ theme })
  }

  getChildContext() {
    return {
      [CONTEXT_KEY]: {
        theme: themes[this.state.theme],
        changeTheme: this.changeTheme
      }
    }
  }
  render() {
    return this.props.children
  }
}
