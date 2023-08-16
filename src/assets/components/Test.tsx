import { motion, useAnimationControls, useSpring } from "framer-motion"
import { FC, useRef, useState } from "react"
import { Square } from "./Square"
import { xyToGridXy } from "../helpers/gridHelpers"
export const Test: FC = () => {
  const constraintsRef = useRef(null)

  const DIM = 150
  const createBox = (xMax: number, yMax: number) => {
    const result = []
    for (let x = 0; x < xMax; x++) {
      for (let y = 0; y < yMax; y++) {
        result.push(<Square x={x} y={y} dimension={DIM}></Square>)
      }
    }
    return result
  }

  // get the cloest rect place
  const peiceRef = useRef<HTMLDivElement>(null)

  // animation?
  const [xyLocation, setXyLocation] = useState({})
  return (
    <>
      <motion.div
        className="drag-area"
        style={dragAreaStyle}
        ref={constraintsRef}
      />
      <div>{createBox(2, 2)}</div>
      <motion.div
        animate={xyLocation}
        style={pieceStyle}
        drag
        dragConstraints={constraintsRef}
        ref={peiceRef}
        onDragEnd={(event, info) => {
          console.log("event: ", event, ", info: ", info)
          const rect = peiceRef.current!.getBoundingClientRect()
          // console.log("rect: ", peiceRef.current)
          const gridXy = xyToGridXy(rect.x, rect.y, DIM)
          console.log("gridXY: ", gridXy)
          // setXyLocation(gridXy)
          setXyLocation(gridXy)
          console.log("xylocaiton: ", xyLocation)
        }}
      />
    </>
  )
}

const dragAreaStyle = {
  position: "absolute",
  width: "600px",
  height: "600px",
  borderRadius: "30px",
  // top: "calc(50% - 150px)",
  // left: "calc(50% - 150px)",
  backgroundColor: "pink",
}

const pieceStyle = {
  backgroundColor: "red",
  width: "150px",
  height: "150px",
  position: "absolute",
  // top: "calc(50% - 150px)",
  // left: "calc(50% - 150px)",
}
