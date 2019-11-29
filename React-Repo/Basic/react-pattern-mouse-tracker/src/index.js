import React from "react";
import ReactDOM from "react-dom";
import Circle from "./Circle";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div className="movement-container" onMouseMove={this.handleMouseMove}>
        <h4>Move your mouse and get location</h4>
        <Circle {...this.state} />
        {/* <Circle x={this.state.x} y={this.state.y} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
