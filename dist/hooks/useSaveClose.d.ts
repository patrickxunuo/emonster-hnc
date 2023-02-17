type CommonProps = {
    showNotification?: boolean;
    mode: "always" | "form" | "modalForm";
};
type ModalProps = {
    mode: "modalForm";
    modalOnClose: () => void;
    modalVisible: boolean;
} | {
    mode: "always" | "form";
    modalOnClose?: never;
    modalVisible?: never;
};
type HookProps = CommonProps & ModalProps;
declare const useSaveClose: ({ mode, modalOnClose, modalVisible, showNotification, }: HookProps) => {
    modified: () => void;
    reset: () => void;
    onSaveCancel: () => void;
};
export default useSaveClose;
