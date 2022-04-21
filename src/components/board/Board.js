import React from "react";
import Square from "../square/Square";
import "./board.css";

const Board = ({ squares, onClick }) => (
  <div className="board">
    {/* map through history array and render the square component in each instance */}
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
