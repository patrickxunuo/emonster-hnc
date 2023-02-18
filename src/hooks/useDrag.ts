import { useState, useRef, useEffect } from "react";

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

  useEffect(() => {
    const target = ref && ref.current ? ref.current : window;
    target.addEventListener("dragenter", dragenter);
    target.addEventListener("dragleave", dragleave);
    target.addEventListener("drop", drop);

    return () => {
      const target = ref && ref.current ? ref.current : window;
      target.removeEventListener("dragenter", dragenter);
      target.removeEventListener("dragleave", dragleave);
      target.removeEventListener("drop", drop);
    };
  }, []);

  return dragging;
}
