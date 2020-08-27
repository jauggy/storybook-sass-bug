import React from "react";

import { BusyButton } from "../../src/lib";

const Template = (args) => <BusyButton {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};

// This default export determines where you story goes in the story list
export default {
  title: "BusyButton",
  component: BusyButton,
};
