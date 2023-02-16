import React, { useCallback, useRef, useState } from "react";
import "./styles.css";
import { Button, Menu, Space, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useTimeout, useClickOutside } from "../../hooks";

const { Text } = Typography;

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

const SpeedDial: React.FunctionComponent<SpeedDialProps> = ({
  actionArray,
  style,
  alwaysShow = true,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  const [visible, handleVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleVisibleTrue = () => handleVisible(true);
  const handleVisibleFalse = () => {
    handleVisible(false);
  }

  const handleHide = useCallback(() => {
    if (!alwaysShow) setHidden(true);
  }, [alwaysShow]);

  const { reset, clear } = useTimeout(() => {
    handleVisibleFalse();
    handleHide();
  }, 800);

  useClickOutside(wrapRef, () => {
    if (visible) {
      handleVisibleFalse();
    }
  });

  return (
    <motion.div
      className={hidden ? "speed-dial-wrap hidden" : "speed-dial-wrap"}
      ref={wrapRef}
      style={style}
    >
      <Space className="speed-dial-trigger">
        <motion.div
          onClick={() => {
            if (visible) {
              handleVisibleFalse();
            } else {
              handleVisibleTrue();
            }
          }}
          onMouseLeave={reset}
          onMouseEnter={() => {
            clear();
            setHidden(false);
          }}
          // @ts-ignore
          style={{ transform: visible ? "rotate(45deg)" : null }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined style={{ fontSize: 20 }} />}
            onClick={() => handleVisible((v) => !v)}
            className={"trigger-btn"}
          />
        </motion.div>
      </Space>
      <AnimatePresence>
        {visible && (
          <Menu
            className="speed-dial-menu"
            style={{ top: -(actionArray.length * 60) - 5 }}
          >
            {actionArray.map((action, index) => (
              <Menu.Item
                key={index}
                style={{ height: 50, display: "flex", alignItems: "center" }}
              >
                <motion.div
                  onMouseEnter={clear}
                  onMouseLeave={reset}
                  style={{ backgroundColor: "transparent" }}
                  transition={{
                    duration: 0.12,
                    delay: 0.05 * (actionArray.length - index),
                    type: "tween",
                  }}
                  initial={{ scale: 0, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{
                    scale: 0,
                    opacity: 0.1,
                    transition: {
                      duration: 0.15,
                      delay: 0.05 * index,
                      type: "tween",
                    },
                  }}
                >
                  <Button
                    size="large"
                    icon={action.icon}
                    shape="circle"
                    onClick={action.onClick}
                    disabled={action.disabled}
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0.1 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: {
                        duration: 0.25,
                        delay: 0.1 * (actionArray.length - index),
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                    className="action-tooltip-container"
                  >
                    <Text className="action-tooltip">{action.tooltip}</Text>
                  </motion.div>
                </motion.div>
              </Menu.Item>
            ))}
          </Menu>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpeedDial;
