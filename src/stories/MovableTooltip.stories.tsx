import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MovableTooltip } from "../components";

export default {
  title: "components/MovableTooltip",
  component: MovableTooltip,
} as ComponentMeta<typeof MovableTooltip>;

const Template: ComponentStory<typeof MovableTooltip> = (args) => (
  <div
    style={{ width: 400, height: 400, display: "grid", placeItems: "center" }}
  >
    <MovableTooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>缩写缩写缩写</div>,
  title: "全称全称全称全称全称全称全称全称",
};

export const WithStyle = Template.bind({});
WithStyle.args = {
  children: <div>缩写缩写缩写</div>,
  title: "全称全称全称全称全称全称全称全称",
  floatContentStyle: {
    color: "#189345",
    fontSize: 16,
  },
};
