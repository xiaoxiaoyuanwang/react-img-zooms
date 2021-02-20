// import React from "react";
import Icon from "./Icon";
export default {
  title: 'Icon Component',
  component: Icon,
};
const Template = (args) => <Icon {...args} />;

export const IconTemplate = Template.bind({});
IconTemplate.args = {
  icon: 'search-plus'
};