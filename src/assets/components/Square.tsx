import { FC } from "react";

export type SquareProps = {
  x: number;
  y: number;
  dimension: number;
};

export const Square: FC<SquareProps> = ({ x, y, dimension }) =>
  // x: number,
  // y: number,
  // diameter: number
  //   color: string,
  //   border: string,
  //   borderColor: string

  {
    return (
      <div
        style={{
          position: "absolute",
          top: x * dimension,
          left: y * dimension,
          width: dimension,
          height: dimension,

          //   top: 0 * 20,
          //   left: 0 * 20,
          //   width: dimension,
          //   height: dimension,
          backgroundColor: "blue",
          border: "2px solid white",
        }}
      />
    );
  };
