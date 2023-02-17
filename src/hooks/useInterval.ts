import { useEffect, useRef } from "react";

export default function useInterval(
  callback: () => void,
  interval: number = 500
) {
  const eventRef = useRef<NodeJS.Timer>();

  const clear = () => {
    if (eventRef.current) clearInterval(eventRef.current);
  };

  const reset = () => {
    if (eventRef.current) return;
    eventRef.current = setInterval(callback, interval);
  };

  useEffect(() => {
    reset();
    return clear;
  }, []);

  return { clear, reset };
}
