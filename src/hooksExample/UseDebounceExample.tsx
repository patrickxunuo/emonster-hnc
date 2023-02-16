import { useState } from "react";
import { useDebounce } from "../hooks";
import { Input, Descriptions, Space } from "antd";
import * as React from "react";

export interface UseDebounceExampleProps {
  delay: number;
}

const UseDebounceExample: React.FunctionComponent<UseDebounceExampleProps> = ({
  delay,
}) => {
  const [value, setValue] = useState("change the value here");
  const [debouncedValue, setDebouncedValue] = useState("change the value here");

  useDebounce(() => setDebouncedValue(value), delay, [value]);

  return (
    <Space direction="vertical">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 200 }}
      />
      <Descriptions bordered={false} column={1}>
        <Descriptions.Item label="delay">{delay}ms</Descriptions.Item>
        <Descriptions.Item label="value">{value}</Descriptions.Item>
        <Descriptions.Item label="debounce value">
          {debouncedValue}
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};

export default UseDebounceExample;
