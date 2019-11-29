import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  state = {
    ssn: '',
    alternateId: '',
    isForeigner: false
  }

  handleSubmit = e => {
    e.target.preventDefault()
    console.log('Form submitted!')
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  render() {
    const { alternateId, ssn, isForeigner } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label className="block">Enter the SSN number</label>
          <input
            type="text"
            name="ssn"
            onChange={this.handleChange}
            value={ssn}
            disabled={!!isForeigner}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="isForeigner"
            checked={isForeigner}
            onChange={this.handleChange}
          />
          <label>I don't have a social security number.</label>
        </div>

        {isForeigner && (
          <div>
            <label className="block">Enter Alternate ID</label>
            <input
              type="text"
              name="alternateId"
              onChange={this.handleChange}
              value={alternateId}
            />
          </div>
        )}
      </form>
    )
  }
}

render(<App />, document.getElementById('root'))
