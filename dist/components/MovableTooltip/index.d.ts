import React, { ReactNode } from "react";
import "./styles.css";
type MovableTooltipProps = {
    children: ReactNode;
    title: string;
    floatContentStyle?: React.CSSProperties;
};
declare const MovableTooltip: React.FunctionComponent<MovableTooltipProps>;
export default MovableTooltip;
