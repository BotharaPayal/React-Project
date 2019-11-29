import React from "react";
import { render } from "react-dom";

const ulStyle = {
  width: "100%",
  listStyle: "none",
  paddingLeft: "0"
};

const liStyle = {
  borderBottom: "1px solid #ccc",
  padding: "8px",
  textAlign: "center"
};

const List = () => (
  <ul style={ulStyle}>
    <li style={liStyle}>1</li>
    <li style={liStyle}>2</li>
    <li style={liStyle}>3</li>
    <li style={liStyle}>4</li>
  </ul>
);

render(<List />, document.getElementById("root"));
