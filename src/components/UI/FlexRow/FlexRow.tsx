import React, { useRef, useEffect } from "react";

import "./FlexRow.css";
import Container from "../dnd/Container";
import { useDrag, useDrop } from "react-dnd";
import ItemType from "./ItemTypes";
/*Interface Declaration */
interface COLPROPS {
  col: number;
  row: number;
}

const FlexRow = (props: COLPROPS) => {
  let columns: Array<object> = [];

  /*Refs*/
  const refs = useRef<(HTMLDivElement | null)[][]>([]);

  /*Function to generate  unique keys */
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}_${new Date().getMilliseconds()}`;
  };

  /*Drag unitlity function from React dnd */
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.item,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  /* Grid Layout logic */
  for (let curRow = 0; curRow < props.row; curRow++) {
    for (let curCol = 0; curCol < props.col; curCol++) {
      columns.push(
        <div
          onMouseDown={() => moseHandler(curRow, curCol)}
          ref={(el: HTMLDivElement | null | any) => {
            refs.current[curRow] = refs.current[curRow] || [];
            refs.current[curRow][curCol] = el;
          }}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move",
          }}
          className="el1"
          id={`${curRow}${curCol}`}
          key={`${curRow}${curCol}${generateKey(curCol)}`}
        >
          {`${curRow}${curCol}`}
        </div>
      );
    }
  }

  useEffect(() => {
    console.log("Element at zero/zero: ", refs);
  }, [props.row]);

  const moseHandler = (curRow: number, curCol: number) => {
    console.log(refs.current[curRow][curCol]);
  };
  return (
    <React.Fragment>
      <div id="app">
        <div
          className="container"
          style={{
            gridTemplateColumns: `repeat(${props.col},1fr)`,
          }}
        >
          {columns}
        </div>
        <Container />
      </div>
    </React.Fragment>
  );
};

export default FlexRow;
