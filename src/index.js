import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className={props.winner ? "square winner" : "square"} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
 
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winner={this.props.winningLine && this.props.winningLine.indexOf(i) >= 0}
      />
    );
  }

  render() {
    let cols = [];
    for (let i=0; i < 3; i++) {
      let rows = []
      for (let j=0; j < 3; j++) {
        rows.push(this.renderSquare((i*3)+j));
      }
      cols.push(<div key={i} className="board-row">{rows}</div>);
    }
    return (
      <div>
        {cols}
      </div>
    );
  }
}

function MoveList(props) {
  const history = props.sortAsc ? props.history.slice() : props.history.slice().reverse();
  return ( history.map((step, move) => {
    const displayMove = props.sortAsc ? move : history.length - move - 1;
    const row = step.clicked.index && step.clicked.index % 3;
    const col = step.clicked.index && Math.floor(step.clicked.index / 3);
    const desc = displayMove ?
      'Go to move #' + displayMove + ": "+step.clicked.player+" ("+row+","+col+")":
      'Go to game start';
    const renderDesc = displayMove === props.stepNumber ? (<b>{desc}</b>) : (<span>{desc}</span>);
    return (
      <li key={displayMove}>
        <button onClick={() => props.handleClick(displayMove)}>{renderDesc}</button>
      </li>
    );
  }));
}

class Game extends React.Component {
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const {winner} = calculateWinner(squares);
    if (!winner && !squares[i]) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          clicked: {
            player: this.state.xIsNext ? 'X' : '0',
            index: i
          }
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
      });
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      history: [{
        squares: Array(9).fill(null),
        clicked: { player: null, index: null}
      }],
      stepNumber: 0,
      sortMovesAsc: true
    };
  }
  toggleSort() {
    this.setState({
      sortMovesAsc: !this.state.sortMovesAsc
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const {winningLine, winner} = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = winner === "tie" ? "It's a tie!" : (winner) + " is the winner!"
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board winningLine={winningLine} squares={current.squares} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <button onClick={() => this.toggleSort()}>Toggle Sort</button>
          <ol><MoveList
            stepNumber={this.state.stepNumber}
            history={history}
            handleClick={(i) => this.jumpTo(i)}
            sortAsc={this.state.sortMovesAsc}
          /></ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let full = true;
  for (let i=0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    full = full && squares[a] && squares[b] && squares[c]
    if (squares[a] && squares[b] === squares[a] && squares[c] === squares[b]) {
      return {
        winningLine: lines[i],
        winner: squares[a],
      };
    }
  }
  return {
    winningLine: null,
    winner: full ? "tie" : null
  };
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

