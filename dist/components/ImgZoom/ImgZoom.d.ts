export default ImgZoom;
declare class ImgZoom extends React.Component<any, any, any> {
    constructor(props: any);
    zoomSize: number;
    isFullScreen: boolean;
    imgTranslateTop: number;
    imgTranslateLeft: number;
    scaleDt: number;
    mousewheel(event: any, isDec: any): void;
    mousedown(event: any): void;
    mouseup(): void;
    mousemove(event: any): void;
    clickInOrOut(bool: any): void;
    rotateLeftOrRight(dir: any): void;
    setTransform(item: any): void;
}
declare namespace ImgZoom {
    namespace propTypes {
        const dataSource: PropTypes.Validator<object>;
        const showOpt: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export namespace dataSource_1 {
            const url: string;
            const scale: number;
            const rotate: number;
            const translateX: number;
            const translateY: number;
        }
        export { dataSource_1 as dataSource };
        const showOpt_1: boolean;
        export { showOpt_1 as showOpt };
    }
}
import React from "react";
import PropTypes from "prop-types";
