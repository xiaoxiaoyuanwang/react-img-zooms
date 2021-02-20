import React, { FC } from "react";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types';
library.add(fas)
export interface IconProps extends FontAwesomeIconProps  {
  /**
   * 设置图标
   */
  // icon: string;
}
export const Icon: FC<IconProps> = (props) => {
  return (
      <>
        <FontAwesomeIcon className="img-zoom-con" {...props}/>
      </>
  );
}
// class Icon extends React.Component {
//   constructor(props: any) {
//       super(props);
//       console.log(props);
//   }

//   componentDidMount() {
//   }
//   render() {
//       return (
//           <>
//             <FontAwesomeIcon className="img-zoom-con" {...this.props} />
//           </>
//       );
//   }
// }
// Icon.propTypes = {
//   /**
//    * 设置图标
//    */
//   icon: PropTypes.string,
// };
export default Icon;