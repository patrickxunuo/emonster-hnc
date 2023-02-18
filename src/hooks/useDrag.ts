import { useState, useRef, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useDrag(ref?: any) {
  const [dragging, setDragging] = useState(false);
  const counterRef = useRef(0);

  const dragenter = (e: any) => {
    e.preventDefault();
    counterRef.current++;
    setDragging(true);
  };
  const dragleave = () => {
    counterRef.current--;
    if (counterRef.current === 0) setDragging(false);
  };
  const drop = () => {
    counterRef.current = 0;
    setDragging(false);
  };

  const target = ref && ref.current ? ref.current : window;

  useEventListener("dragenter", dragenter, target);
  useEventListener("dragleave", dragleave, target);
  useEventListener("drop", drop, target);

  return dragging;
}
