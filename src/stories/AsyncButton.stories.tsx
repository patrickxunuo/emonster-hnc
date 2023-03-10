import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AsyncButton } from "../components";

export default {
  title: "components/AsyncButton",
  component: AsyncButton,
} as ComponentMeta<typeof AsyncButton>;

const Template: ComponentStory<typeof AsyncButton> = (args) => (
  <div style={{ display: "grid", placeItems: "center" }}>
    <AsyncButton {...args}>click</AsyncButton>
  </div>
);

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay || 0));

export const Default = Template.bind({});
Default.args = {
  onClick: async () => {
    await sleep(500);
  },
};
Default.parameters = {
  docs: {
    source: {
      code: `
<AsyncBtn
  onClick={async () => {
    await sleep(500);
  }}
>
  click
</AsyncBtn>`,
      language: "tsx",
      type: "auto",
    },
  },
};
