import { FC } from "react"

export type SquareProps = {
  x: number
  y: number
  dimension: number
}

export const Square: FC<SquareProps> = ({ x, y, dimension }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: x * dimension,
        left: y * dimension,
        width: dimension,
        height: dimension,
        backgroundColor: "blue",
        border: "0px solid white",
      }}
    />
  )
}
