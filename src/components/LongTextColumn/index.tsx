import { Tooltip } from "antd";
import React, { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import MovableTooltip from "../MovableTooltip";

type LongTextColumnProps = {
  copy?: boolean;
  text: string;
  hoverShow?: boolean;
  maxWidth: number;
  movable?: boolean;
  style?: React.CSSProperties;
};

const LongTextColumn: React.FunctionComponent<LongTextColumnProps> = (
  props
) => {
  const {
    copy = false,
    text,
    hoverShow = true,
    maxWidth,
    movable = false,
    style,
  } = props;
  const [copied, setCopied] = useState(false);
  return hoverShow ? (
    <div style={{ display: "flex", alignItems: "center" }}>
      {movable ? (
        <MovableTooltip title={text}>
          <div
            style={{
              ...style,
              textOverflow: "ellipsis",
              maxWidth,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {text}
          </div>
        </MovableTooltip>
      ) : (
        <Tooltip title={text}>
          <div
            style={{
              ...style,
              textOverflow: "ellipsis",
              maxWidth,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {text}
          </div>
        </Tooltip>
      )}
      {text && text !== "-" && copy && (
        <a
          onClick={async (e) => {
            e.stopPropagation();
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(function () {
              setCopied(false);
            }, 3000);
          }}
        >
          {" "}
          {copied ? <CheckOutlined /> : <CopyOutlined />}
        </a>
      )}
    </div>
  ) : (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          ...style,
          textOverflow: "ellipsis",
          maxWidth,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {text}
      </div>
      {text && text !== "-" && copy && (
        <a
          onClick={async (e) => {
            e.stopPropagation();
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(function () {
              setCopied(false);
            }, 3000);
          }}
        >
          {" "}
          {copied ? <CheckOutlined /> : <CopyOutlined />}
        </a>
      )}
    </div>
  );
};

export default LongTextColumn;
