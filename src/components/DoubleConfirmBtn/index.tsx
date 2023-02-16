import React, { useRef, useState } from "react";
import "./styles.css";
import { useClickOutside, useLoading } from "../../hooks";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
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

const DoubleConfirmBtn: React.FunctionComponent<DoubleConfirmBtnProps> = ({
  loading = false,
  label,
  secondaryText,
  secondaryType = "danger", // DANGER OR SAVE, default to DANGER
  size = "middle",
  onConfirm,
  shape,
  disabled = false,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState(0);
  const { isLoading, handleActionLoad } = useLoading(onConfirm);

  useClickOutside(btnRef, () => setState(0));

  return (
    <Spin
      spinning={isLoading || loading}
      indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />}
    >
      <Button
        ref={btnRef}
        className={
          state === 0
            ? "double-confirm-btn"
            : secondaryType === "save"
            ? "double-confirm-btn ant-btn-save"
            : "double-confirm-btn ant-btn-dangerous"
        }
        shape={shape}
        onClick={async (e) => {
          e.stopPropagation();
          if (state === 0) {
            setState(1);
          }
          if (state === 1) {
            await handleActionLoad();
            setState(0);
          }
        }}
        size={size}
        disabled={isLoading || loading || disabled}
      >
        <span style={{ visibility: state === 0 ? "visible" : "hidden" }}>
          {label}
        </span>
        <span style={{ visibility: state === 1 ? "visible" : "hidden" }}>
          {secondaryText}
        </span>
      </Button>
    </Spin>
  );
};

export default DoubleConfirmBtn;
