import { ComponentMeta, ComponentStory } from "@storybook/react";
import UseThrottleExample from "../hooksExample/UseThrottleExample";

export default {
  title: "hooks/useThrottle",
  component: UseThrottleExample,
} as ComponentMeta<typeof UseThrottleExample>;

const Template: ComponentStory<typeof UseThrottleExample> = (args) => (
  <UseThrottleExample {...args} />
);

export const Default = Template.bind({});
Default.args = {
  interval: 500,
};
Default.parameters = {
  docs: {
    source: {
      code: `
const App = ({ interval }) => {
  const [value, setValue] = useState("change the value here");
  const throttledValue = useThrottle<string>(value, interval);

  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Descriptions bordered={false} column={1}>
        <Descriptions.Item label="delay">{interval}ms</Descriptions.Item>
        <Descriptions.Item label="value">{value}</Descriptions.Item>
        <Descriptions.Item label="throttle value">
          {throttledValue}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
      `,
      language: "tsx",
      type: "auto",
    },
  },
};
