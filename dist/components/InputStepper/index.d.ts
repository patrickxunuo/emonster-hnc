import React from "react";
import "./styles.css";
import { InputNumberProps } from "antd/es/input-number";
export interface InputStepperProps extends InputNumberProps {
    stepper?: number;
    onAdd?: () => void;
    onMinus?: () => void;
    hideMinus?: boolean;
    hideAdd?: boolean;
    setValue: any;
    value: number;
    loading?: boolean;
}
declare const InputStepper: React.FunctionComponent<InputStepperProps>;
export default InputStepper;
