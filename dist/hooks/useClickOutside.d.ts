import React, { RefObject } from "react";
export default function useClickOutside(ref: RefObject<HTMLElement>, cb: (e: React.MouseEvent) => void): {
    clickEventProtected: () => void;
};
