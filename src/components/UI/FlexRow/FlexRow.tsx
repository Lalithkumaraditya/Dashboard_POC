import React, { useRef, useEffect, useState } from "react";
import img from "../../../assets/Capture.png";
import img2 from "../../../assets/chart2.png";
import img3 from "../../../assets/chart3.png";
import "./FlexRow.css";
import Container from "../dnd/Container";
import { useDrag, useDrop } from "react-dnd";
import ItemType from "./ItemTypes";
/*Interface Declaration */
// New grid
interface COLPROPS {
  col: number;
  row: number;
  grid: any[];
}

const FlexRow = (props: COLPROPS) => {
  let columns: Array<object> = [];
  let [containers, setContainer] = useState<object>([]);
  let [curWidth, setCurWidth] = useState(window.innerWidth);
  let [totalWidth, setTotalWidth] = useState(curWidth);

  /*Refs*/
  const refs = useRef<(HTMLDivElement | null)[][]>([]);
  const refContainer = useRef<(any)>();
  const refImage = useRef<(any)>();

  /*Function to generate  unique keys */
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}_${new Date().getMilliseconds()}`;
  };

  useEffect(() => {
    console.log("Element at zero/zero: ", refs);
    console.log(containers);
  }, [props.row]);

  const moseHandler = (curRow: number, curCol: number) => {
    console.log(refs.current[curRow][curCol]);
  };


  function dragStart(ev: any) {
    console.log("dragging has started");
    ev.dataTransfer.setData("Text", ev.target.id);

  }

  function allowDrop(ev: any) {
    ev.preventDefault();
  }

  function drop(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    console.log(`data = ${data}`);
    let dragElement: HTMLImageElement | any = document.getElementById(data);
    ev.target.append(dragElement);
    console.log("Image dropped");

    console.log(`before dropping row width is ${totalWidth}`);

    //validation part
    if (totalWidth < 500) {
      alert("We don't have enough space for dragging!!")
    }
    totalWidth = totalWidth - 500;
    setTotalWidth(totalWidth);
    console.log(`After dropping remaning row width is ${totalWidth}`);

  }

  // useEffect related to column validation
  useEffect(() => {
    refContainer.current.addEventListener('drop', drop);
  }, [])

  return (
    <React.Fragment>
      <div id="app">
        <div
          className="container" onDrop={drop} onDragOver={allowDrop} ref={refContainer}
          style={{
            gridTemplateColumns: `repeat(${props.col},1fr)`,
          }}
        >
          {props.grid && (
            <div className="gridContainer">
              {props.grid.map((item: any, index: number) => {
                let rows = Array.from(Array(item.row).keys());
                let cols = Array.from(Array(item.col).keys());
                return (
                  <div className="rowSection" key={`${rows}${cols}${generateKey}`}>
                    {rows.map((r, ri) => {
                      return (
                        <div key={r + ri} className="rowContainer" id="rowContainers">
                          {cols.map((c, ci) => {
                            return (
                              <div
                                onMouseDown={() => moseHandler(r, c)}
                                ref={(el: HTMLDivElement | null | any) => {
                                  refs.current[r] =
                                    refs.current[r] || [];
                                  refs.current[r][c] = el;
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
                                id={`${r}${c}`}
                                key={`${r}${c}${generateKey(c)}`}
                              >
                                {`Grid-${index} RowId-${ri} ColId-${ci}`}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>


        <div>

        </div>
        <img
          ref={refImage}
          id="drag2"
          draggable="true"
          onDragStart={dragStart}
          src={img}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
        <img
          ref={refImage}
          id="drag3"
          draggable="true"
          onDragStart={dragStart}
          src={img2}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
        <br />
        <img
          ref={refImage}
          id="drag4"
          draggable="true"
          onDragStart={dragStart}
          src={img3}
          alt="hello"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </React.Fragment>
  );
};

export default FlexRow;
