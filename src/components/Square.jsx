import React from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{ height: "70px", width: "70px" }}
    >
      {value}
    </button>
  );
}
