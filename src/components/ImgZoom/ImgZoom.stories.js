// import React from "react";
import ImgZoom from "./ImgZoom";
import ImgTem from '../../assets/example.png';
export default {
  title: 'Component',
  component: ImgZoom,
};
const Template = (args) => <ImgZoom {...args} />;

export const ImgZoomTemplate = Template.bind({});
ImgZoomTemplate.args = {
  dataSource: {
    url: ImgTem
  }
};