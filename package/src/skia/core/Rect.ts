import { Skia } from "../Skia";
import type { SkRect } from "../types";

export const point = (x: number, y: number) => Skia.Point(x, y);

export const rect = (x: number, y: number, width: number, height: number) =>
  Skia.XYWHRect(x, y, width, height);

export const rrect = (r: SkRect, rx: number, ry: number) =>
  Skia.RRectXY(r, rx, ry);

export const bounds = (rects: SkRect[]) => {
  const x = Math.min(...rects.map((r) => r.x));
  const y = Math.min(...rects.map((r) => r.y));
  const width = Math.max(...rects.map((r) => r.x + r.width));
  const height = Math.max(...rects.map((r) => r.y + r.height));
  return rect(x, y, width, height);
};
