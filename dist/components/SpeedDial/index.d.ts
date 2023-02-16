import React from "react";
import "./styles.css";
type ActionProps = {
    icon: React.ReactNode;
    tooltip: string | React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
};
type SpeedDialProps = {
    actionArray: ActionProps[];
    style?: React.CSSProperties;
    alwaysShow?: boolean;
};
declare const SpeedDial: React.FunctionComponent<SpeedDialProps>;
export default SpeedDial;
