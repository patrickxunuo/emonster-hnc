import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextAutoScroll } from "../components";
import { Select } from "antd";

export default {
  title: "components/TextAutoScroll",
  component: TextAutoScroll,
} as ComponentMeta<typeof TextAutoScroll>;

const options = [
  { value: 1, label: "a very long optiooooooooooon" },
  { value: 2, label: "short option" },
  {
    value: 3,
    label: "a very very looooooooooooooooooooooooooooooooooooong option",
  },
  { value: 4, label: "ok" },
];

const Template: ComponentStory<typeof TextAutoScroll> = (args) => (
  <>
    <div style={{ width: 100, whiteSpace: "nowrap", overflow: "hidden" }}>
      <TextAutoScroll {...args}>
        very looooooooooooooooooooooooooooooooooooooooooooooooooong text
      </TextAutoScroll>
    </div>
    <Select defaultValue={1} style={{ width: 120 }}>
      {options.map((item) => (
        <Select.Option key={item.value} value={item.value}>
          <TextAutoScroll {...args}>{item.label}</TextAutoScroll>
        </Select.Option>
      ))}
    </Select>
  </>
);

export const Default = Template.bind({});
