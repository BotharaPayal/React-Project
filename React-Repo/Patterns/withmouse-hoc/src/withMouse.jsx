import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

export default function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    offset = {
      x: 0,
      y: 0
    }
    displayName = `withMouse(${getDisplayName(WrappedComponent)})`

    componentDidMount() {
      this.setOffset()
      window.addEventListener('resize', this.setOffset)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.setOffset)
    }

    setOffset = () => {
      const rect = this.node.firstChild.getBoundingClientRect()
      this.offset = {
        x: Math.floor(rect.left),
        y: Math.floor(rect.top)
      }
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX - this.offset.x,
        y: e.clientY - this.offset.y
      })
    }

    render() {
      return (
        <span
          onMouseMove={this.handleMouseMove}
          ref={node => (this.node = node)}
        >
          <WrappedComponent {...this.props} mouse={this.state} />
        </span>
      )
    }
  }

  hoistStatics(Mouse, WrappedComponent)
  return Mouse
}
