import { useState } from "react";

type ToggleReturnType<T> = [T, () => void, () => void];

export default function useToggle<T>(
  firstValue: T,
  secondValue: T
): ToggleReturnType<T> {
  const [value, setValue] = useState<T>(firstValue);

  const toggle = () =>
    setValue((v: T) => (v === firstValue ? secondValue : firstValue));

  const reset = () => setValue(firstValue);

  return [value, toggle, reset];
}
