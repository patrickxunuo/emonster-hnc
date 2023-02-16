import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useMousePosition } from "../../hooks";
import "./styles.css";

const offsetX = 5; // positive to move right
const offsetY = -5; // negative to move up
const EMPTY_TEXT_REPLACER = "-";

type MovableTitleProps = {
  title: string;
  parentRef: any;
  style: React.CSSProperties;
};

const MovableTitle: React.FunctionComponent<MovableTitleProps> = ({
  title,
  parentRef,
  style,
}) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [elHeight, setElHeight] = useState(0);
  const [elWidth, setElWidth] = useState(0);
  const { x, y } = useMousePosition(parentRef);

  useEffect(() => {
    console.log(1);
    if (elRef && elRef.current) {
      setElHeight(elRef.current.offsetHeight);
      setElWidth(elRef.current.offsetWidth);
    }
  }, [title]);

  return (
    <div
      className="em__movable__tooltip__title"
      style={{
        ...style,
        top: y - (elHeight || 0) + offsetY,
        left: x - (elWidth / 2 || 0) + offsetX,
        opacity: elHeight,
      }}
      ref={elRef}
    >
      {title}
    </div>
  );
};

type MovableTooltipProps = {
  children: ReactNode;
  title: string;
  floatContentStyle?: React.CSSProperties;
};

const MovableTooltip: React.FunctionComponent<MovableTooltipProps> = ({
  children,
  title,
  floatContentStyle,
}) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && title && title !== EMPTY_TEXT_REPLACER && (
        <MovableTitle
          title={title}
          parentRef={elRef}
          style={{
            fontSize: 12,
            fontWeight: "normal",
            ...floatContentStyle,
          }}
        />
      )}
      <div
        style={{ display: "inline-block" }}
        ref={elRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
    </>
  );
};

export default MovableTooltip;
