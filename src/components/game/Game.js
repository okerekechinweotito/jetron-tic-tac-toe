import React, { useState } from "react";
import { calculateWinner } from "../../helperFunctions/calculateWinner";
import Board from "../board/Board";
import "./game.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]); // create array with 9 elements and fill with null
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O"; // alternate the display text when clicked to X or O

  /* handles square click */
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  /* handles history Go to move*/
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : <h3>RESET</h3>;
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  /* handles text to be displayed after Game is over */
  const verdict = () => {
    if (winner) {
      return <h3 className="verdict">Player {winner} wins !</h3>;
    } else if (!winner && history.length === 10) {
      return <h3 className="verdict-draw">We have a Draw</h3>;
    } else {
      return `Next Player : ${xO}`;
    }
  };

  return (
    <>
      <h1 className="title">Jetron Tic Tac Toe</h1>
      <div className="board-info-wrapper">
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className="info-wrapper">
          <div>
            <h3>History</h3>
            {renderMoves()}
          </div>
          <h2 className="player-turn">{verdict()}</h2>
        </div>
      </div>
    </>
  );
};

export default Game;
