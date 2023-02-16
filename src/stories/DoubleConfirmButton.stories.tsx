import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DoubleConfirmBtn } from "../components";

export default {
  title: "components/DoubleConfirmBtn",
  component: DoubleConfirmBtn,
} as ComponentMeta<typeof DoubleConfirmBtn>;

const Template: ComponentStory<typeof DoubleConfirmBtn> = (args) => (
  <div style={{ display: "inline-block", width: 200 }}>
    <DoubleConfirmBtn {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "click",
  secondaryText: "confirm",
  onConfirm: () => alert("confirmed"),
};
Default.parameters = {
  docs: {
    source: {
      code: `
 <DoubleConfirmBtn
  label: 'click',
  secondaryText: "confirm",
  onConfirm: () => alert("confirmed"),
/>
`,
      language: "tsx",
      type: "auto",
    },
  },
};
