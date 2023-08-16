const DIM = 20;
import { Square } from "./assets/components/Square";
function App() {
  const createDiv = (xMax: number, yMax: number) => {
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
      <div>Puzzle</div>
      <div
        style={{
          margin: "20px",
          position: "relative",
        }}
      >
        <div>{createDiv(2, 2)}</div>
      </div>
    </div>
  );
}

export default App;
