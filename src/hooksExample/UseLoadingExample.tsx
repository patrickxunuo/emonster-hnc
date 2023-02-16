import { useLoading } from "../hooks";
import * as React from "react";
import { Space, Form, Button, Input, InputNumber } from "antd";
import { useState } from "react";

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay || 0));

const UseLoadingExample = () => {
  const [value, setValue] = useState<object>();

  const handleSubmit = async (values: object) => {
    await sleep(1000);
    setValue(values);
  };

  const { isLoading, handleActionLoad } = useLoading(handleSubmit);

  return (
    <div style={{ height: 400, display: "grid", placeContent: "center" }}>
      <Space>
        <Form
          onFinish={handleActionLoad}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          style={{ padding: "1rem", border: "1px solid #000", borderRadius: 5 }}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button htmlType="submit" loading={isLoading}>Submit</Button>
          </Form.Item>
        </Form>
        <div>
          <div>your submitted values:</div>
          <div>{JSON.stringify(value) || "-"}</div>
        </div>
      </Space>
    </div>
  );
};

export default UseLoadingExample;
