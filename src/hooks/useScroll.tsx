import React, { useState } from "react";
import { useEventListener } from "./index";

type ScrollObj = {
  scrollX: number;
  scrollY: number;
};

export default function useScroll(): ScrollObj {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const scrollX = -bodyOffset.left;
  const scrollY = -bodyOffset.top;

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
  };

  useEventListener("scroll", listener, window);

  return {
    scrollY,
    scrollX,
  };
}
