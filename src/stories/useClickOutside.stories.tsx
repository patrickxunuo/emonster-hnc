import { ComponentMeta, ComponentStory } from "@storybook/react";
import UseClickOutsideExample from "../hooksExample/UseClickOutsideExample";

export default {
  title: "hooks/useClickOutside",
  component: UseClickOutsideExample,
} as ComponentMeta<typeof UseClickOutsideExample>;

const Template: ComponentStory<typeof UseClickOutsideExample> = () => (
  <UseClickOutsideExample />
);

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
const App = () => {
  const eleRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBg] = useState("green");

  const { clickEventProtected } = useClickOutside(eleRef, () => {
    setBg("red");
  });

  return (
    <div
      style={{
        width: 400,
        height: 400,
        border: "1px solid #000",
        display: "grid",
        placeItems: "center",
        position: "relative",
      }}
    >
      <div
        ref={eleRef}
        style={{ width: 200, height: 200, backgroundColor }}
        onClick={() => setBg("green")}
      >
        <div>click inside to set bg green</div>
        <div>click outside to set bg red</div>
      </div>
      <div
        onClick={clickEventProtected}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 100,
          height: 100,
          backgroundColor: "grey",
        }}
      >
        this block is protected
      </div>
    </div>
  );
};`,
      language: "tsx",
      type: "auto",
    },
  },
};
