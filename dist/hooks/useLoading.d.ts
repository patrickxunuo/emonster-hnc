type onSubmitType = (...params: any[]) => Promise<any>;
type ActionType = {
    isLoading: boolean;
    load: () => void;
    notLoad: () => void;
    handleActionLoad: onSubmitType;
    groupLoad: (fun: onSubmitType) => (...params: any) => Promise<any>;
};
export default function useLoading(onSubmit?: onSubmitType): ActionType;
export {};
