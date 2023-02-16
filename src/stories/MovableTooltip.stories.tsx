import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MovableTooltip } from "../components";

export default {
  title: "components/MovableTooltip",
  component: MovableTooltip,
} as ComponentMeta<typeof MovableTooltip>;

const Template: ComponentStory<typeof MovableTooltip> = (args) => (
  <div
    style={{
      height: 200,
      display: "grid",
      placeItems: "center",
    }}
  >
    <MovableTooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "缩写缩写缩写",
  title: "全称全称全称全称全称全称全称全称",
};
Default.parameters = {
  docs: {
    source: {
      code: `
<MovableTooltip title="全称全称全称全称全称全称全称全称">
  缩写缩写缩写
</MovableTooltip>`,
      language: "tsx",
      type: "auto",
    },
  },
};