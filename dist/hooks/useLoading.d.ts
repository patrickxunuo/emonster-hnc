type onSubmitType = (...params: any[]) => Promise<any>;
type ActionType = {
    isLoading: boolean;
    load: () => void;
    notLoad: () => void;
    handleActionLoad: onSubmitType;
    groupLoad: (fun: onSubmitType) => (...params: any) => Promise<any>;
};
declare const _default: (onSubmit: onSubmitType) => ActionType;
export default _default;
