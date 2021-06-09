import React from 'react';
import Board from './Board.jsx';
import checkAnswers from '../../../functions/checkAnswers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        0, 0, 0, 2, 6, 0, 7, 0, 1,
        6, 8, 0, 0, 7, 0, 0, 9, 0,
        1, 9, 0, 0, 0, 4, 5, 0, 0,
        8, 2, 0, 1, 0, 0, 0, 4, 0,
        0, 0, 4, 6, 0, 2, 9, 0, 0,
        0, 5, 0, 0, 0, 3, 0, 2, 8,
        0, 0, 9, 3, 0, 0, 0, 7, 4,
        0, 4, 0, 0, 5, 0, 0, 3, 6,
        7, 0, 3, 0, 1, 8, 0, 0, 0,
      ],
      answer: [
        4, 3, 5, 2, 6, 9, 7, 8, 1,
        6, 8, 2, 5, 7, 1, 4, 9, 3,
        1, 9, 7, 8, 3, 4, 5, 6, 2,
        8, 2, 6, 1, 9, 5, 3, 4, 7,
        3, 7, 4, 6, 8, 2, 9, 1, 5,
        9, 5, 1, 7, 4, 3, 6, 2, 8,
        5, 1, 9, 3, 2, 6, 8, 7, 4,
        2, 4, 8, 9, 5, 7, 1, 3, 6,
        7, 6, 3, 4, 1, 8, 2, 5, 9
      ],
      first: true,
      results: null
    };
    this.editSquare = this.editSquare.bind(this);
    this.checkSolved = this.checkSolved.bind(this);
  }

  editSquare(id, value) {
    const { board } = this.state;
    const updated = board.map((square, index) => {
        if (index === id) {
          return value;
        }
        return square;
    });
    this.setState({board: updated});
  }

  // checkSolved() {
  //   const { board, answer } = this.state;
  //   for (let i = 0; i < board.length; i++) {
  //     if (board[i] !== answer[i]) {
  //       this.setState({solved: false});
  //     }
  //   }
  //   this.setState({solved: true});
  // }

  checkSolved() {
    const { board } = this.state;
    console.log(board);
    let results = checkAnswers(board);
    console.log(results);
    this.setState({ results: results });
  }

  render() {
    const { board, results } = this.state;
    return(
      <div>
        <h1>Sudoku</h1>
        <Board board={board} editSquare={this.editSquare}/>
        <button onClick={() => this.checkSolved()}>Check answers</button>
        {results
          ? <h2>Completed! Congratulations, you did it!</h2>
          : <h2>Keep trying! There are still duplicates in one of the following: row(s), column(s), 3x3 subgrid(s)!</h2>
        }
      </div>
    );
  }
}

export default App;
