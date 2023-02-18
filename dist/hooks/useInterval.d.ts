export default function useInterval(callback: () => void, interval?: number): {
    clear: () => void;
    reset: () => void;
};
