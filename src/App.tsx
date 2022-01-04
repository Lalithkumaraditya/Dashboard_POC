import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import FlexRow from "./components/UI/FlexRow/FlexRow";
interface IPROPS {
  color: string;
  id: string;
  row: number;
  col: number;
}

export default function App() {
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });

  const Tile = (props: IPROPS) => {
    const { color, id, row, col } = props;
    return (
      <div
        id={id}
        className={`${color} tile`}
        onClick={() => {
          setSelectedCell({ row, col });
        }}
        // onMouseEnter={() => {
        //   setSelectedCell({ row, col });
        // }}
      >
        {/* {id} */}
      </div>
    );
  };

  const createBoard = (n: number, m: number) => {
    let board = [];
    for (let row = 1; row <= n; row++) {
      let boardRow = [];
      for (let col = 1; col <= m; col++) {
        const color =
          row <= selectedCell.row && col <= selectedCell.col ? "black" : "";
        boardRow.push(
          <Tile
            key={`${col}${row}`}
            color={color}
            id={`${col}${row}`}
            row={row}
            col={col}
          />
        );
      }
      board.push(
        <div key={`${row}`} className="row">
          {boardRow}
        </div>
      );
    }
    return board;
  };
  return (
    <div className="App">
      {createBoard(6, 9)}{" "}
      <p>
        {selectedCell.row}*{selectedCell.col}
      </p>
      <FlexRow col={selectedCell.col} row={selectedCell.row} />
    </div>
  );
}
