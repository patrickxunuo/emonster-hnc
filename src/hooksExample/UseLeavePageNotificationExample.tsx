import { useLeavePageNotification } from "../hooks";
import * as React from "react";

const UseLeavePageNotificationExample = () => {
  useLeavePageNotification(true, {
    text: "ooooops",
  });

  return <div>minimize the browser or select another tab of your browser</div>;
};

export default UseLeavePageNotificationExample;
