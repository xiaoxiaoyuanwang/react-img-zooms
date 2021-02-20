var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from "react";
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
var ImgZoom = /** @class */ (function (_super) {
    __extends(ImgZoom, _super);
    function ImgZoom(props) {
        var _this = _super.call(this, props) || this;
        _this.zoomSize = 0.1;
        _this.isFullScreen = false; // 是否全屏
        _this.imgTranslateTop = 0; // 中间变量，暂存元素点击时的translate
        _this.imgTranslateLeft = 0; // 中间变量，暂存元素点击时的translate
        _this.scaleDt = 1; // 缩放初始值1
        var initObj = __assign({ move: false, wheel: false, wheelDes: false, wheelUp: false, scale: 1, rotate: 0, translateX: 0, translateY: 0, transfrom: null, url: '' }, props.dataSource // 传进的数据
        );
        _this.state = {
            imgObj: initObj
        };
        return _this;
    }
    ImgZoom.prototype.componentDidMount = function () {
        this.setTransform(this.state.imgObj);
    };
    // 滚轮缩放
    ImgZoom.prototype.mousewheel = function (event, isDec) {
        var listItem = this.state.imgObj;
        listItem.wheel = true;
        if (listItem.scale === undefined) {
            this.scaleDt = 1;
        }
        else {
            this.scaleDt = listItem.scale;
        }
        if (event.wheelDelta > 0 || event.deltaY < 0) {
            listItem.wheelUp = true;
            listItem.wheelDes = false;
            this.scaleDt -= this.zoomSize;
        }
        else {
            if (isDec == 'in') {
                listItem.wheelUp = true;
                listItem.wheelDes = false;
                this.scaleDt -= this.zoomSize;
            }
            else {
                listItem.wheelUp = false;
                listItem.wheelDes = true;
                this.scaleDt += this.zoomSize;
            }
        }
        this.scaleDt.toFixed(1);
        listItem.scale = this.scaleDt;
        this.setTransform(listItem);
        if (listItem.scale < 0) {
            this.scaleDt = 0;
            listItem.scale = this.scaleDt;
            this.setTransform(listItem);
        }
    };
    // 鼠标按下
    ImgZoom.prototype.mousedown = function (event) {
        // 清除滚轮的样式
        var listItem = this.state.imgObj;
        listItem.wheelUp = false;
        listItem.wheelDes = false;
        this.imgTranslateTop = listItem.translateY
            ? listItem.translateY
            : 0;
        this.imgTranslateLeft = listItem.translateX
            ? listItem.translateX
            : 0;
        listItem.downPositionTop = event.screenY;
        listItem.downPositionLeft = event.screenX;
        listItem.move = true;
    };
    // 鼠标抬起
    ImgZoom.prototype.mouseup = function () {
        var listItem = this.state.imgObj;
        listItem.move = false;
        this.setState({
            imgObj: listItem
        });
    };
    // 鼠标移动
    ImgZoom.prototype.mousemove = function (event) {
        var listItem = this.state.imgObj;
        if (listItem.move) {
            listItem.translateY =
                event.screenY -
                    listItem.downPositionTop +
                    this.imgTranslateTop;
            listItem.translateX =
                event.screenX -
                    listItem.downPositionLeft +
                    this.imgTranslateLeft;
            this.setTransform(listItem);
        }
    };
    // 点击放大or点击缩小
    ImgZoom.prototype.clickInOrOut = function (bool) {
        this.mousewheel({}, bool);
    };
    // 左旋转or右旋转
    ImgZoom.prototype.rotateLeftOrRight = function (dir) {
        var listItem = this.state.imgObj;
        var direction = dir === 'left' ? -90 : 90;
        var Rotate = listItem.rotate
            ? listItem.rotate + direction
            : direction;
        listItem.rotate = Rotate;
        this.setTransform(listItem);
    };
    // 设置css3 transfrom
    ImgZoom.prototype.setTransform = function (item) {
        var listItem = JSON.parse(JSON.stringify(item));
        listItem.transfrom = "translate(" + listItem.translateX + "px, " + listItem.translateY + "px) scale(" + listItem.scale + ", " + listItem.scale + ") rotate(" + listItem.rotate + "deg)";
        this.setState({
            imgObj: listItem
        });
    };
    ImgZoom.prototype.render = function () {
        var _this = this;
        var imgObj = this.state.imgObj;
        var classNamesImg = classNames({
            imgItem: !imgObj.wheel,
            imgItemWheelUp: imgObj.wheelUp,
            imgItemWheelDes: imgObj.wheelDes,
            imgItemMove: imgObj.move
        });
        var _a = this.props, className = _a.className, dataSource = _a.dataSource, showOpt = _a.showOpt, restProps = __rest(_a, ["className", "dataSource", "showOpt"]);
        var classNamesWrapper = classNames("img-wrapper", {
            "img-wrapper-height": showOpt
        });
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classNames("img-zoom-wrapper", className) },
                React.createElement("div", __assign({ className: classNames(classNamesWrapper, classNamesImg) }, restProps, { onWheel: function (event) {
                        _this.mousewheel(event);
                    }, onMouseMove: function (event) {
                        _this.mousemove(event);
                    }, onMouseDown: function (event) {
                        _this.mousedown(event);
                    }, onMouseUp: function (event) {
                        _this.mouseup(event);
                    } }),
                    React.createElement("img", { className: classNamesImg, style: { transform: imgObj.transfrom }, src: imgObj.url })),
                showOpt ?
                    React.createElement("div", { className: "img-operate" },
                        React.createElement(Icon, { icon: 'search-plus', title: "\u653E\u5927", onClick: function () { return _this.clickInOrOut('out'); } }),
                        React.createElement(Icon, { icon: 'search-minus', title: "\u7F29\u5C0F", onClick: function () { return _this.clickInOrOut('in'); } }),
                        React.createElement(Icon, { icon: 'undo-alt', title: "\u65CB\u8F6C", onClick: function () { return _this.rotateLeftOrRight('left'); } }),
                        React.createElement(Icon, { icon: 'redo-alt', title: "\u65CB\u8F6C", onClick: function () { return _this.rotateLeftOrRight('right'); } }))
                    : null)));
    };
    return ImgZoom;
}(Component));
ImgZoom.propTypes = {
    /**
     * 显示图片的URL
     */
    dataSource: PropTypes.object.isRequired,
    /**
     * 是否显示操作按钮
     */
    showOpt: PropTypes.bool,
    /**
     * 容器的class
     */
    className: PropTypes.string,
};
ImgZoom.defaultProps = {
    dataSource: {
        url: '',
        scale: 1,
        rotate: 0,
        translateX: 0,
        translateY: 0,
    },
    showOpt: true,
};
export default ImgZoom;
