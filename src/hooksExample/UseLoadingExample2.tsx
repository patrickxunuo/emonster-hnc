import { useLoading } from "../hooks";
import * as React from "react";
import { Space, Button } from "antd";
import { useState } from "react";

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay || 0));

const UseLoadingExample = () => {
  const [value, setValue] = useState<string>();
  const { isLoading, groupLoad } = useLoading();

  const handleAction1 = groupLoad(async () => {
    setValue("action 1 start");
    await sleep(1000);
    setValue("action 1 finished");
  });

  const handleAction2 = groupLoad(async () => {
    setValue("action 2 start");
    await sleep(1000);
    setValue("action 2 finished");
  });

  const handleAction3 = groupLoad(async () => {
    setValue("action 3 start");
    await sleep(1000);
    setValue("action 3 finished");
  });

  return (
    <div style={{ height: 400, display: "grid", placeContent: "center" }}>
      <Space direction="vertical">
        <Button loading={isLoading} onClick={handleAction1}>
          Action 1
        </Button>
        <Button loading={isLoading} onClick={handleAction2}>
          Action 2
        </Button>
        <Button loading={isLoading} onClick={handleAction3}>
          Action 3
        </Button>
        <div>{JSON.stringify(value) || "-"}</div>
      </Space>
    </div>
  );
};

export default UseLoadingExample;
