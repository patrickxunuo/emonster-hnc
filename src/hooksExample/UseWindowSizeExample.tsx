import { useWindowSize } from "../hooks";
import * as React from "react";

const UseWindowSizeExample = () => {
  const { width, height } = useWindowSize();

  return (
    <div
      style={{
        height: 200,
        display: "grid",
        placeContent: "center",
      }}
    >
      <p>height: {height}px</p>
      <p>width: {width}px</p>
    </div>
  );
};

export default UseWindowSizeExample;
