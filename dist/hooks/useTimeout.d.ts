export default function useTimeout(callback: () => void, delay: number): {
    reset: () => void;
    clear: () => void;
};
