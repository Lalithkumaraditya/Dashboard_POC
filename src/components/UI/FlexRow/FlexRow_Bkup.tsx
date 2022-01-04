import { RssFeedTwoTone } from "@material-ui/icons";
import React, { useRef, useEffect, createRef, useState } from "react";
import "./FlexRow.css";
interface COLPROPS {
  col: number;
  row: number;
}
const FlexRow = (props: COLPROPS) => {
  let ref = useRef<any>(null);
  let ref2 = useRef<any>([]);
  const [elRefs, setElRefs] = useState<any>([]);
  let columns: Array<object> = [];
  let [minwidth, setMinWidth] = useState("");
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}_${new Date().getMilliseconds()}`;
  };
  useEffect(() => {}, [props.col]);
  for (let curRow = 1; curRow <= props.row; curRow++) {
    for (let curCol = 1; curCol <= props.col; curCol++) {
      columns.push(
        <div
          className="el1"
          //   style={{ minWidth: minwidth }}
          id={`${curRow}${curCol}`}
          key={`${curRow}${curCol}${generateKey(curCol)}`}
        >{`${curRow}${curCol}`}</div>
      );
    }
  }

  return (
    <React.Fragment>
      <div id="app">
        <div
          ref={ref}
          className="container"
          style={{
            gridTemplateColumns: `repeat(${props.col},1fr)`,
            gridTemplateRows: `repeat(${props.row},1fr)`,
          }}
        >
          {columns}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FlexRow;
