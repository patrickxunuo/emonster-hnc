import { useEffect, useMemo, useState } from "react";
import { Modal } from "antd";
import useLeavePageNotification from "./useLeavePageNotification";

type CommonProps = {
  showNotification?: boolean;
  mode: "always" | "form" | "modalForm";
};

type ModalProps =
  | {
      mode: "modalForm";
      modalOnClose: () => void;
      modalVisible: boolean;
    }
  | {
      mode: "always" | "form";
      modalOnClose?: never;
      modalVisible?: never;
    };

type HookProps = CommonProps & ModalProps;

const useSaveClose = ({
  mode = "always",
  modalOnClose,
  modalVisible,
  showNotification = true,
}: HookProps) => {
  const [mod, setMod] = useState(false);

  const modified = () => setMod(true);

  const reset = () => setMod(false);

  const saveCloseIsActive = useMemo(() => {
    switch (mode) {
      case "always":
      default:
        return true;
      case "form":
        return mod;
      case "modalForm":
        return mod && modalVisible === true;
    }
  }, [modalVisible, mode, mod]);

  useLeavePageNotification(saveCloseIsActive && showNotification, {
    text: "You have unsaved content",
  });

  useEffect(() => {
    if (saveCloseIsActive) {
      window.onbeforeunload = function () {
        return "You have some unsaved changes";
      };
      return;
    }
    window.onbeforeunload = function () {
      // blank function do nothing
    };
  }, [saveCloseIsActive]);

  const onSaveCancel = () => {
    if (saveCloseIsActive) {
      Modal.confirm({
        width: 500,
        centered: true,
        title: "Are you sure to leave",
        maskClosable: true,
        onOk: () => {
          if (modalOnClose) {
            modalOnClose();
          }
          reset();
        },
      });
      return;
    }
    if (modalOnClose) {
      modalOnClose();
    }
    reset();
  };

  return { modified, reset, onSaveCancel };
};

export default useSaveClose;
