import React from "react";
type AbbrTextProps = {
    trans: (id: string) => any;
    id: string;
    movable?: boolean;
};
declare const AbbrText: React.FunctionComponent<AbbrTextProps>;
export default AbbrText;
