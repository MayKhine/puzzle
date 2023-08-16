const DIM = 40;
import { useRef } from "react";
import { Square } from "./assets/components/Square";
import { motion } from "framer-motion";
function App() {
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
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        style={puzzlePieceStyle}
      />
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
  position: "absolute",
};

export default App;
