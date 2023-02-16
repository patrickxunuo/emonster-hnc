import { useMousePosition } from "../hooks";
import * as React from "react";
import { useRef } from "react";

type UseMousePositionExampleProps = {
  containerHeight: number;
  containerWidth: number;
  absolute: boolean;
};

const UseMousePositionExample: React.FunctionComponent<
  UseMousePositionExampleProps
> = ({ containerHeight, containerWidth, absolute }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(containerRef, absolute);

  return (
    <div
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
        border: "1px solid #000",
        display: "grid",
        placeContent: "center",
      }}
    >
      <p>x: {x}px</p>
      <p>y: {y}px</p>
    </div>
  );
};

export default UseMousePositionExample;
