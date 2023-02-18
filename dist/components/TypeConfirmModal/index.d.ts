import React from "react";
import { ModalProps } from "antd/es/modal/Modal";
export interface TypeConfirmModalProps extends ModalProps {
    verifyString: string;
    inputPosition?: "top" | "bottom";
}
declare const TypeConfirmModal: React.FunctionComponent<TypeConfirmModalProps>;
export default TypeConfirmModal;
