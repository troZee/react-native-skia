import React from "react";

import { createDrawing } from "../../nodes/Drawing";
import type {
  CustomPaintProps,
  RectDef,
  AnimatedProps,
} from "../../processors";
import { processRect } from "../../processors";

export type RectProps = RectDef & CustomPaintProps;

const onDraw = createDrawing<RectProps>(
  ({ Skia, canvas, paint }, rectProps) => {
    const rect = processRect(Skia, rectProps);
    canvas.drawRect(rect, paint);
  }
);

export const Rect = (props: AnimatedProps<RectProps>) => {
  return <skDrawing onDraw={onDraw} {...props} />;
};
