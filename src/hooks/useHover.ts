import { RefObject, useState } from "react";
import useEventListener from "./useEventListener";

export default function useHover(ref: RefObject<HTMLElement>) {
  const [hovered, setHovered] = useState(false);

  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
