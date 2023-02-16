import React from "react";
import { Button } from "antd";
import { useLoading } from "../../hooks";
import type { ButtonProps } from "antd/es/button/button";

interface AsyncBtnProps extends ButtonProps {
  children: React.ReactNode | string;
  onClick: (...params: any[]) => Promise<any>;
  loading?: boolean;
}

const AsyncBtn: React.FunctionComponent<AsyncBtnProps> = ({
  children,
  onClick,
  loading,
  ...btnConfigs
}) => {
  const { isLoading, handleActionLoad } = useLoading(onClick);
  return (
    <Button
      {...btnConfigs}
      onClick={handleActionLoad}
      loading={loading || isLoading}
    >
      {children}
    </Button>
  );
};

export default AsyncBtn;
