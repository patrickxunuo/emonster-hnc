import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LongTextColumn } from "../components";
import { Table } from "antd";

export default {
  title: "components/LongTextColumn",
  component: LongTextColumn,
} as ComponentMeta<typeof LongTextColumn>;

const dataSource = [
  { id: 1, text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  { id: 2, text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" },
  { id: 3, text: "cccccccccccccccccccccccccccccccccc" },
  { id: 4, text: "ddddddddddddddddddddddddddddddd" },
];

const Template: ComponentStory<typeof LongTextColumn> = (args) => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "long text",
      dataIndex: "text",
      width: 200,
      render: (x) => <LongTextColumn {...args} text={x} />,
    },
  ];
  return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
};

export const Default = Template.bind({});
Default.args = {
  maxWidth: 100,
  copy: false,
  movable: true,
};
Default.parameters = {
  docs: {
    source: {
      code: `
const dataSource = [
  { id: 1, text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  { id: 2, text: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" },
  { id: 3, text: "cccccccccccccccccccccccccccccccccc" },
  { id: 4, text: "ddddddddddddddddddddddddddddddd" },
];

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "long text",
    dataIndex: "text",
    width: 200,
    render: (x) => <LongTextColumn {...args} text={x} />,
  },
];

return <Table dataSource={dataSource} columns={columns} rowKey="id" />;
`,
      language: "tsx",
      type: "auto",
    },
  },
};