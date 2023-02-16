import React from "react";
type LongTextColumnProps = {
    copy?: boolean;
    text: string;
    hoverShow?: boolean;
    maxWidth: number;
    movable?: boolean;
    style?: React.CSSProperties;
};
declare const LongTextColumn: React.FunctionComponent<LongTextColumnProps>;
export default LongTextColumn;
