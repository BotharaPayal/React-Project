import React from "react";
import { render } from "react-dom";

//const StyledBtn = () => 'btn here'

class StyledBtn extends React.Component {
  render() {
    const isEnabledStyle = {
      backgroundColor: "green",
      width: "100px",
      height: "40px",
      color: "#fff",
      borderRadius: "7px",
      border: "1px solid",
      fontSize: "16px"
    };
    const isDisabledStyle = {
      backgroundColor: "red",
      width: "100px",
      height: "40px",
      color: "#fff",
      borderRadius: "7px",
      border: "1px solid",
      fontSize: "16px"
    };
    return (
      <button style={this.props.isEnabled ? isEnabledStyle : isDisabledStyle}>
        {this.props.text}
      </button>
    );
  }
}

const App = () => (
  <div>
    <StyledBtn text="Click Me!" isEnabled={true} />
    <br />
    <br />
    <StyledBtn text="Not Me!" isEnabled={false} />
    <br />
    <br />
    <StyledBtn text="Or Me!" isEnabled={true} />
  </div>
);

render(<App />, document.getElementById("root"));
