export default function useCountdown(cd: number, interval?: number): {
    timeLeft: number;
    reset: () => Promise<void>;
    resume: () => void;
    stop: () => void;
};
