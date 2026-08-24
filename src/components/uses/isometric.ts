export type Point3 = [number, number, number]

const COS = Math.cos(Math.PI / 6)
const SIN = Math.sin(Math.PI / 6)

export function project(
  [x, y, z]: Point3,
  origin: Point3,
  scale: number,
): [number, number] {
  const [ox, oy] = origin
  return [
    ox + (x - y) * COS * scale,
    oy + (x + y) * SIN * scale - z * scale * 1.18,
  ]
}

export function face(
  points: Point3[],
  origin: Point3,
  scale: number,
): string {
  return (
    points
      .map((point, index) => {
        const [px, py] = project(point, origin, scale)
        return `${index === 0 ? "M" : "L"}${px.toFixed(2)},${py.toFixed(2)}`
      })
      .join(" ") + " Z"
  )
}

/** Box anchored at front-left-bottom corner (x0,y0,z0). w=x, d=y, h=z extent. */
export function boxFaces(
  x0: number,
  y0: number,
  z0: number,
  w: number,
  d: number,
  h: number,
) {
  const flb: Point3 = [x0, y0, z0]
  const frb: Point3 = [x0 + w, y0, z0]
  const brb: Point3 = [x0 + w, y0 + d, z0]
  const blb: Point3 = [x0, y0 + d, z0]
  const flt: Point3 = [x0, y0, z0 + h]
  const frt: Point3 = [x0 + w, y0, z0 + h]
  const brt: Point3 = [x0 + w, y0 + d, z0 + h]
  const blt: Point3 = [x0, y0 + d, z0 + h]

  return {
    top: [flt, frt, brt, blt],
    front: [flb, frb, frt, flt],
    back: [blb, brb, brt, blt],
    right: [frb, brb, brt, frt],
    left: [flb, blb, blt, flt],
  }
}

export function boxCorners(
  x0: number,
  y0: number,
  z0: number,
  w: number,
  d: number,
  h: number,
): Point3[] {
  return [
    [x0, y0, z0],
    [x0 + w, y0, z0],
    [x0 + w, y0 + d, z0],
    [x0, y0 + d, z0],
    [x0, y0, z0 + h],
    [x0 + w, y0, z0 + h],
    [x0 + w, y0 + d, z0 + h],
    [x0, y0 + d, z0 + h],
  ]
}

export function centerOffset(
  points: Point3[],
  origin: Point3,
  scale: number,
  viewW: number,
  viewH: number,
  padding = 24,
): [number, number] {
  const projected = points.map((point) => project(point, origin, scale))
  const minX = Math.min(...projected.map(([x]) => x))
  const maxX = Math.max(...projected.map(([x]) => x))
  const minY = Math.min(...projected.map(([, y]) => y))
  const maxY = Math.max(...projected.map(([, y]) => y))

  const contentW = maxX - minX
  const contentH = maxY - minY
  const offsetX = (viewW - contentW) / 2 - minX
  const offsetY = (viewH - contentH) / 2 - minY + padding * 0.15

  return [offsetX, offsetY]
}
