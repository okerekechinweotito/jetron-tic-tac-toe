import React from "react";
import "./square.css";
const Square = ({ value, onClick }) => {
  /* to alternate css style for X or O */
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {/* X  or O or empty */}
      {value}
    </button>
  );
};

export default Square;
