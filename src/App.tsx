const DIM = 40;
import { useRef, useState } from "react";
import { Square } from "./assets/components/Square";
import { motion } from "framer-motion";
function App() {
  const [xy, setXy] = useState([]);
  const constraintsRef = useRef(null);

  const createBox = (xMax: number, yMax: number) => {
    const result = [];
    for (let x = 0; x < xMax; x++) {
      for (let y = 0; y < yMax; y++) {
        result.push(<Square x={x} y={y} dimension={DIM}></Square>);
      }
    }
    return result;
  };

  return (
    <div
      style={{ backgroundColor: "lightgray", height: "100%", width: "100%" }}
    >
      Puzzle
      <motion.div ref={constraintsRef} style={puzzleConstraintStyle}>
        {createBox(2, 2)}
        <motion.div
          drag
          dragSnapToOrigin
          animate={{ top: xy[1], left: xy[0] }}
          // animate={{ x: xy[0], y: xy[1] }}
          onDragStart={() => {}}
          onDragEnd={(event, info) => {
            console.log("event: ", event, ", info: ", info);
            setXy((xy) => [100 + (xy[0] ?? 0), 100 + (xy[1] ?? 0)]);
          }}
          dragConstraints={constraintsRef}
          style={{
            // top: xy[1],
            // left: xy[0],
            backgroundColor: "red",
            width: DIM,
            height: DIM,
            zIndex: 1,
            position: "absolute",
          }}
        />
      </motion.div>
    </div>
  );
}

const puzzleConstraintStyle = {
  backgroundColor: "pink",
  width: "500px",
  height: "500px",
  margin: "20px",
  position: "relative",
};
const puzzlePieceStyle = {
  backgroundColor: "red",
  width: DIM,
  height: DIM,
  // position: "relative",
  // position: "absolute",
};

export default App;
