import React from "react";
import type { ButtonProps } from "antd/es/button/button";
interface AsyncBtnProps extends ButtonProps {
    children: React.ReactNode | string;
    onClick: (...params: any[]) => Promise<any>;
    loading?: boolean;
}
declare const AsyncBtn: React.FunctionComponent<AsyncBtnProps>;
export default AsyncBtn;
