import React from "react";
import ReactDOM from "react-dom";

import name, { day, currentDate } from "../abc.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Hello {name}
        Today is {day}
        Its {currentDate()} now
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
