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

export const NoDebounce = Template.bind({});
NoDebounce.args = {
  delay: 0,
};
