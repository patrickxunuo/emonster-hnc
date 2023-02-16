import { ComponentMeta, ComponentStory } from "@storybook/react";
import UseToggleExample from "../hooksExample/UseToggleExample";

export default {
  title: "hooks/useToggle",
  component: UseToggleExample,
} as ComponentMeta<typeof UseToggleExample>;

const Template: ComponentStory<typeof UseToggleExample> = (args) => (
  <UseToggleExample {...args} />
);

export const Default = Template.bind({});
Default.args = {
  firstValue: true,
  secondValue: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `
const App: React.FunctionComponent<UseToggleExampleProps<string>> = ({ 
  firstValue, 
  secondValue 
}) => {
  const [value, toggle, reset] = useToggle(firstValue, secondValue);
  
  return (
    <Space direction="vertical">
      <p>value: {JSON.stringify(value)}</p>
      <Button onClick={toggle}>toggle</Button>
      <Button onClick={reset}>reset</Button>
    </Space>
  );
};`,
      language: "tsx",
      type: "auto",
    },
  },
};
