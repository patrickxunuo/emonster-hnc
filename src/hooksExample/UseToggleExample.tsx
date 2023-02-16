import { useToggle } from "../hooks";
import * as React from "react";
import { Button, Space } from "antd";

export interface UseToggleExampleProps<T> {
  firstValue: T;
  secondValue: T;
}

const UseToggleExample: React.FunctionComponent<
  UseToggleExampleProps<string>
> = ({ firstValue, secondValue }) => {
  const [value, toggle, reset] = useToggle(firstValue, secondValue);

  return (
    <Space direction="vertical">
      <p>value: {JSON.stringify(value)}</p>
      <Button onClick={toggle}>toggle</Button>
      <Button onClick={reset}>reset</Button>
    </Space>
  );
};

export default UseToggleExample;
