import useEventListener from "./useEventListener";
import React, { RefObject, useRef } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement>,
  cb: (e: React.MouseEvent) => void
) {
  const protectedRef = useRef<boolean>(false);
  const clickEventProtected = () => {
    protectedRef.current = true;
  };
  useEventListener(
    "click",
    (e: any) => {
      if (
        ref.current == null ||
        ref.current.contains(e.target) ||
        protectedRef.current
      ) {
        protectedRef.current = false;
        return;
      }
      cb(e);
      protectedRef.current = false;
    },
    document
  );
  return { clickEventProtected };
}
