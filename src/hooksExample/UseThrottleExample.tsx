import { useState } from "react";
import { useThrottle } from "../hooks";
import { Input, Descriptions, Space } from "antd";
import * as React from "react";

export interface UseThrottleExampleProps {
  interval: number;
}

const UseThrottleExample: React.FunctionComponent<UseThrottleExampleProps> = ({
  interval,
}) => {
  const [value, setValue] = useState("change the value here");

  const throttledValue = useThrottle<string>(value, interval);

  return (
    <Space direction="vertical">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 200 }}
      />
      <Descriptions bordered={false} column={1}>
          <Descriptions.Item label="delay">{interval}ms</Descriptions.Item>
          <Descriptions.Item label="value">{value}</Descriptions.Item>
        <Descriptions.Item label="throttle value">
          {throttledValue}
        </Descriptions.Item>
      </Descriptions>
    </Space>
  );
};

export default UseThrottleExample;
