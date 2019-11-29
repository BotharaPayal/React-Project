import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// class Square extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       fieldValue: ""
//     };
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: "X",
      isGameOver: false,
      squares: Array(9).fill(null),
      lineCheck: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ]
    };
  }

  calculateWinner() {
    var i;
    for (i = 0; i < this.state.lineCheck.length; i++) {
      var [a, b, c] = this.state.lineCheck[i];
      var sqr = this.state.squares;
      if (sqr[a] === sqr[b] && sqr[b] === sqr[c] && sqr[a] != null) {
        return true;
      }
    }
    return false;
  }

  handleClick(i) {
    if (!this.state.isGameOver) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.currentPlayer;
      this.setState({ squares: squares });
      if (this.state.currentPlayer === "X") {
        this.setState({ currentPlayer: "O" });
      } else {
        this.setState({ currentPlayer: "X" });
      }
    }
  }

  componentDidUpdate() {
    if (this.calculateWinner()) {
      this.setState({ isGameOver: true });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div>
          Next <strong> {this.state.currentPlayer}</strong>
        </div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
