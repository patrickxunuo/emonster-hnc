type ToggleReturnType<T> = [T, () => void, () => void];
export default function useToggle<T>(firstValue: T, secondValue: T): ToggleReturnType<T>;
export {};
