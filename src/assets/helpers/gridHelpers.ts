export const xyToIndices = (x: number, y: number, dim: number) => {
  return { xIndex: Math.round(x / dim), yIndex: Math.round(y / dim) }
}

export const xyToGridXy = (x: number, y: number, dim: number) => {
  const { xIndex, yIndex } = xyToIndices(x, y, dim)
  return { x: Math.abs(xIndex * dim), y: Math.abs(yIndex * dim) }
}
