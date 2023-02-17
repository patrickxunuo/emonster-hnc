import { useEffect, useState } from "react";

type MouseCoords = {
  x: number;
  y: number;
};

export default function useMousePosition(
  ref: any,
  absolute: boolean = true
): MouseCoords {
  const [coords, setCoords] = useState<MouseCoords>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoords({
        x: absolute ? event.clientX : event.offsetX,
        y: absolute ? event.clientY : event.offsetY,
      });
    };

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref]);

  return { x: coords.x, y: coords.y };
}
