import React from "react";
import "./styles.css";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { ButtonShape } from "antd/es/button/buttonHelpers";
export interface DoubleConfirmBtnProps {
    loading?: boolean;
    label: string;
    secondaryText: string;
    secondaryType?: "save" | "danger";
    size?: SizeType;
    onConfirm: (...params: any[]) => Promise<any>;
    shape?: ButtonShape;
    disabled?: boolean;
}
declare const DoubleConfirmBtn: React.FunctionComponent<DoubleConfirmBtnProps>;
export default DoubleConfirmBtn;
