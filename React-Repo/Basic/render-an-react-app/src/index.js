import React from "react";
import ReactDom, { render } from "react-dom";

// render(<App />, document.getElementById('root'))

render(<h1>Good Afternoon</h1>, document.getElementById("root"));
ReactDom.render(<h1>Good Evening</h1>, document.getElementById("root1"));
