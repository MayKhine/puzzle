import React, { FC, useRef, useState } from "react"
import { motion } from "framer-motion"
import { xyToGridXy } from "../helpers/gridHelpers"

export type PuzzlePeiceProps = {
  xIndex: number
  yIndex: number
  dim: number
  xOffset: number
  yOffset: number
}

export const PuzzlePeice: FC<PuzzlePeiceProps> = ({
  xIndex,
  yIndex,
  dim,
  xOffset,
  yOffset,
}) => {
  const [xy, setXy] = useState({ x: xIndex * dim, y: yIndex * dim })

  const peiceRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={peiceRef}
      drag
      dragSnapToOrigin
      // animate={{ top: xy.x, left: xy.y }}
      onDragStart={() => {}}
      onDragEnd={() => {
        // console.log("event: ", event, ", info: ", info)
        const rect = peiceRef.current!.getBoundingClientRect()
        console.log("ref", peiceRef.current)
        setXy(() => {
          const gridXy = xyToGridXy(rect.x - xOffset, rect.y - yOffset, dim)
          console.log("gridXy", gridXy)
          return gridXy
        })
      }}
      // dragConstraints={constraintsRef}
      dragElastic={0.2}
      style={{
        top: xy.y,
        left: xy.x,
        backgroundColor: "red",
        width: dim,
        height: dim,
        zIndex: 1,
        position: "absolute",
      }}
    />
  )
}
