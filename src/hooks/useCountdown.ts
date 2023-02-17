import useInterval from "./useInterval";
import { useEffect, useState } from "react";

export default function useCountdown(cd: number, interval: number = 1000) {
  const [timeLeft, setTimeLeft] = useState(cd);

  const handleReduce = () =>
    setTimeLeft((tl) => (tl - interval > 0 ? tl - interval : 0));

  const { reset: resume, clear: stop } = useInterval(handleReduce, interval);

  useEffect(() => {
    if (timeLeft === 0) stop();
  }, [timeLeft]);

  const reset = async () => {
    stop();
    await setTimeLeft(cd);
    resume();
  };

  return { timeLeft, reset, resume, stop };
}
