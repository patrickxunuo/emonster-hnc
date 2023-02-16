import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SpeedDial } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faF,
  faTruck,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Switch } from "antd";

export default {
  title: "components/SpeedDial",
  component: SpeedDial,
} as ComponentMeta<typeof SpeedDial>;

const Template: ComponentStory<typeof SpeedDial> = () => {
  const [alwaysShow, setAlwaysShow] = useState(false);

  return (
    <>
      <Switch
        checked={alwaysShow}
        checkedChildren="always show"
        unCheckedChildren="hide after a while"
        onChange={setAlwaysShow}
      />
      <SpeedDial
        alwaysShow={alwaysShow}
        actionArray={[
          {
            icon: <FontAwesomeIcon icon={faTruck} color="#094067" />,
            tooltip: "first button",
            onClick: () => {
              console.log("clicked first");
            },
          },
          {
            icon: <FontAwesomeIcon icon={faTruckArrowRight} color="#5f6c7b" />,
            tooltip: "second button",
            onClick: () => {
              console.log("clicked second");
            },
          },
          {
            icon: <FontAwesomeIcon icon={faF} color="#3da9fc" />,
            tooltip: "third button",
            onClick: () => {
              console.log("clicked third");
            },
          },
        ]}
      />
    </>
  );
};

export const Default = Template.bind({});
