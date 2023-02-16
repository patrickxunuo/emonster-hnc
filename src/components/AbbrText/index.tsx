import React from "react";
import MovableTooltip from "../MovableTooltip";
import { Tooltip } from "antd";

type AbbrTextProps = {
  trans: (id: string) => any;
  id: string;
  movable?: boolean;
};

const AbbrText: React.FunctionComponent<AbbrTextProps> = ({
  trans,
  id,
  movable = false,
}) =>
  movable ? (
    <MovableTooltip title={trans(id)}>{trans(`${id}.abbr`)}</MovableTooltip>
  ) : (
    <Tooltip title={trans(id)}>{trans(`${id}.abbr`)}</Tooltip>
  );

export default AbbrText;
