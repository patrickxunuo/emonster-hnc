import { useCallback, useEffect, useRef } from "react";

type Config = {
  icon?: any;
  text: string;
};

export default function useLeavePageNotification(
  active: boolean,
  config: Config
) {
  const { icon, text } = config;
  const permRef = useRef(false);
  const notificationRef = useRef<Notification>();

  const popNote = useCallback(() => {
    if (document.visibilityState === "hidden") {
      const leaveDate = new Date();
      notificationRef.current = new Notification(text, {
        tag: "leave note",
        icon,
      });
    } else {
      if (notificationRef.current) notificationRef.current.close();
    }
  }, []);

  useEffect(() => {
    if (active) {
      Notification.requestPermission().then((perm) => {
        permRef.current = perm === "granted";
      });
      document.addEventListener("visibilitychange", popNote, true);
    } else {
      document.removeEventListener("visibilitychange", popNote, true);
    }

    return () => {
      permRef.current = false;
      document.removeEventListener("visibilitychange", popNote, true);
    };
  }, [active]);
}
