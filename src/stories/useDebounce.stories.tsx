import { ComponentMeta, ComponentStory } from "@storybook/react";
import UseDebounceExample from "../hooksExample/UseDebounceExample";

export default {
  title: "hooks/useDebounce",
  component: UseDebounceExample,
} as ComponentMeta<typeof UseDebounceExample>;

const Template: ComponentStory<typeof UseDebounceExample> = (args) => (
  <UseDebounceExample {...args} />
);

export const Default = Template.bind({});
Default.args = {
  delay: 500,
};
Default.parameters = {
  docs: {
    source: {
      code: `
const App = ({ delay }) => {
  const [value, setValue] = useState("change the value here");
  const [debouncedValue, setDebouncedValue] = useState("change the value here");

  useDebounce(() => setDebouncedValue(value), delay, [value]);

  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Descriptions bordered={false} column={1}>
        <Descriptions.Item label="delay">{delay}ms</Descriptions.Item>
        <Descriptions.Item label="value">{value}</Descriptions.Item>
        <Descriptions.Item label="debounce value">
          {debouncedValue}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};`,
      language: "tsx",
      type: "auto",
    },
  },
};