import React from "react";
import { Button, Input, InputNumber } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
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
const InputStepper: React.FunctionComponent<InputStepperProps> = ({
  stepper = 1,
  onAdd,
  onMinus,
  hideMinus = false, // hide the minus button, default to false
  hideAdd = false, // hide the add button, default to false
  setValue,
  loading = false,
  ...otherInputProps
}) => {
  const { value, onChange, disabled } = otherInputProps;
  const add = () => setValue((s: number) => s + stepper);
  const minus = () => setValue((s: number) => s - stepper);

  return (
    <Input.Group compact className="input-stepper">
      {!hideMinus && (
        <Button
          onClick={onMinus || minus}
          icon={<MinusOutlined />}
          disabled={disabled}
          loading={loading}
        />
      )}
      <InputNumber
        value={value}
        onChange={(e) => {
          setValue(e);
          if (onChange) {
            onChange(e);
          }
        }}
        disabled={disabled || loading}
      />
      {!hideAdd && (
        <Button
          onClick={onAdd || add}
          icon={<PlusOutlined />}
          disabled={disabled}
          loading={loading}
        />
      )}
    </Input.Group>
  );
};

export default InputStepper;
