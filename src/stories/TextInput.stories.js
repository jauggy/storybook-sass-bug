import React from "react";

import { TextInput } from "../../src/lib";

const Template = (args) => <TextInput {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};

// This default export determines where you story goes in the story list
export default {
  title: "TextInput",
  component: TextInput,
};
