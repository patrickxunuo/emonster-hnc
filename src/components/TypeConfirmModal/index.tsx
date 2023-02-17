import React, { useState } from "react";
import { Input, Modal } from "antd";
import { useLoading } from "../../hooks";
import { ModalProps } from "antd/es/modal/Modal";

export interface TypeConfirmModalProps extends ModalProps {
  verifyString: string;
  inputPosition?: "top" | "bottom";
}

const TypeConfirmModal: React.FunctionComponent<TypeConfirmModalProps> = ({
  verifyString,
  inputPosition = "bottom",
  ...modalProps
}) => {
  const { open, title, onOk, onCancel, children, ...otherModalProps } =
    modalProps;
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  // @ts-ignore
  const { isLoading, handleActionLoad } = useLoading(onOk);

  return (
    <Modal
      {...otherModalProps}
      open={open}
      title={title}
      okButtonProps={{
        disabled: !readyToSubmit,
        loading: isLoading,
      }}
      onCancel={onCancel}
      onOk={handleActionLoad}
    >
      {inputPosition === "top" ? (
        <>
          <Input
            onChange={(e) => {
              if (e.target.value === verifyString) {
                setReadyToSubmit(true);
                return;
              }
              setReadyToSubmit(false);
            }}
          />
          {children}
        </>
      ) : (
        <>
          {children}
          <Input
            onChange={(e) => {
              if (e.target.value === verifyString) {
                setReadyToSubmit(true);
                return;
              }
              setReadyToSubmit(false);
            }}
          />
        </>
      )}
    </Modal>
  );
};

export default TypeConfirmModal;
