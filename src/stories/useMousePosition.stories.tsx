import { ComponentMeta, ComponentStory } from "@storybook/react";
import UseMousePositionExample from "../hooksExample/UseMousePositionExample";

export default {
  title: "hooks/useMousePosition",
  component: UseMousePositionExample,
} as ComponentMeta<typeof UseMousePositionExample>;

const Template: ComponentStory<typeof UseMousePositionExample> = (args) => (
  <UseMousePositionExample {...args} />
);

export const Default = Template.bind({});
Default.arts = {
  containerHeight: 500,
  containerWidth: 500,
  absolute: true,
};
Default.parameters = {
  docs: {
    source: {
      code: `
const App = ({ 
  containerHeight, // height of the reference container
  containerWidth, // width of the reference container 
  absolute // mouse position relative to container or window 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(containerRef, absolute);

  return (
    <div
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      <p>x: {x}px</p>
      <p>y: {y}px</p>
    </div>
  );
};`,
      language: "tsx",
      type: "auto",
    },
  },
};
