import React, { useRef, useEffect, useState } from "react";
import img from "../../../assets/Capture.png";
import img2 from "../../../assets/chart2.png";
import img3 from "../../../assets/chart3.png";
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
  let [containers, setContainer] = useState<object>([]);

  /*Refs*/
  const refs = useRef<(HTMLDivElement | null)[][]>([]);

  /*Function to generate  unique keys */
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}_${new Date().getMilliseconds()}`;
  };

  /* Grid Layout logic */
  for (let curRow = 0; curRow < props.row; curRow++) {
    for (let curCol = 0; curCol < props.col; curCol++) {
      columns.push(
        <div
          onMouseDown={() => moseHandler(curRow, curCol)}
          ref={(el: HTMLDivElement | null | any) => {
            refs.current[curRow] = refs.current[curRow] || [];
            refs.current[curRow][curCol] = el;
            // el.setAttribute("ref", { drag });
          }}
          style={{
            // opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move",
          }}
          onDrop={drop}
          onDragOver={allowDrop}
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
    console.log(containers);
  }, [props.row]);

  const moseHandler = (curRow: number, curCol: number) => {
    console.log(refs.current[curRow][curCol]);
  };
  function drag(ev: any) {
    ev.dataTransfer.setData("Text", ev.target.id);
  }
  function allowDrop(ev: any) {
    ev.preventDefault();
  }
  function drop(ev: any) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  }
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

        {/* <Container /> */}
        <div id="div1" onDrop={drop} onDragOver={allowDrop}></div>

        <img
          id="drag2"
          draggable="true"
          onDragStart={drag}
          src={img}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
        <img
          id="drag3"
          draggable="true"
          onDragStart={drag}
          src={img2}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
        <br />
        <img
          id="drag3"
          draggable="true"
          onDragStart={drag}
          src={img3}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </React.Fragment>
  );
};

export default FlexRow;
