var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
library.add(fas);
export var Icon = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(FontAwesomeIcon, __assign({ className: "img-zoom-con" }, props))));
};
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
