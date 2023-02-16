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
    <div>
      <div
        ref={eleRef}
        style={{ backgroundColor }}
        onClick={() => setBg("green")}
      >
        <div>click inside to set bg green</div>
        <div>click outside to set bg red</div>
      </div>
      <div onClick={clickEventProtected}>
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
