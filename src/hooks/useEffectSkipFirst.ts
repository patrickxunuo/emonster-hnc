import { useRef, useEffect } from "react";

export default (cb: () => void, dependencies: any[]) => {
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current === false) cb();
    ref.current = false;
  }, [...dependencies]);
};
