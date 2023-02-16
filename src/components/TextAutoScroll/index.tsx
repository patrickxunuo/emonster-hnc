import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "antd";

const { Text } = Typography;

const useResizeEffect = (onResize: () => void, deps: any[] = []) => {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, onResize]);
};

type TextStyle = {
  [property: string]: string;
};

export interface TextAutoScrollProps {
  children: string;
  style?: TextStyle;
}

const TextAutoScroll = ({ children, style }: TextAutoScrollProps) => {
  // this has to be done by ref so when window event resize listener will trigger - we will get the current element
  const containerRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);
  const [className, setClassName] = useState("better-text-wrap");
  const [hovering, setHovering] = useState(false);

  const setScrollableOnResize = () => {
    if (!containerRef.current) return;
    const { clientWidth, scrollWidth } = containerRef.current;
    setIsScrollable(scrollWidth > clientWidth);
  };

  useResizeEffect(setScrollableOnResize, [containerRef]);

  return (
    <motion.div
      whileHover={
        isScrollable
          ? {
              x:
                containerRef.current?.clientWidth &&
                containerRef.current?.scrollWidth
                  ? containerRef.current?.clientWidth -
                    containerRef.current?.scrollWidth
                  : 0,
              transition: { duration: 0.8 },
            }
          : {}
      }
      className={className}
      onMouseEnter={() => {
        setHovering(true);
        if (isScrollable) {
          setClassName("better-text-wrap sliding");
        } else {
          setClassName("better-text-wrap");
        }
      }}
      onMouseLeave={() => {
        setHovering(false);
        setClassName("better-text-wrap");
      }}
      ref={containerRef}
    >
      <Text style={{ ...style }}>{children}</Text>
      <AnimatePresence>
        {isScrollable && !hovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            className="ellipsis-tag"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TextAutoScroll;
