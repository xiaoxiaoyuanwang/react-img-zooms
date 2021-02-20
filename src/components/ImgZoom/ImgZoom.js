import React, { Component } from "react";
import classNames from 'classnames'
import Icon from '../Icon/Icon'
import PropTypes from 'prop-types';
class ImgZoom extends Component {
  constructor(props) {
      super(props);
      this.zoomSize = 0.1;
      this.isFullScreen= false; // 是否全屏
      this.imgTranslateTop= 0; // 中间变量，暂存元素点击时的translate
      this.imgTranslateLeft= 0; // 中间变量，暂存元素点击时的translate
      this.scaleDt= 1 // 缩放初始值1
      let initObj = {
        move: false,
        wheel: false,
        wheelDes: false,
        wheelUp: false,
        scale: 1, // 缩放
        rotate: 0,// 旋转
        translateX: 0, // X轴移动距离
        translateY: 0, // Y轴移动距离
        transfrom: null, // css组合样式
        url: '', // 图片路径
        ...props.dataSource // 传进的数据
      }
      this.state={
        imgObj: initObj
      }
  }

  componentDidMount() {
    this.setTransform(this.state.imgObj)
  }
  // 滚轮缩放
  mousewheel(event, isDec) {
    const listItem = this.state.imgObj
    listItem.wheel = true
    if (listItem.scale === undefined) {
      this.scaleDt = 1
    } else {
      this.scaleDt = listItem.scale
    }
    if (event.wheelDelta > 0 || event.deltaY < 0) {
      listItem.wheelUp = true
      listItem.wheelDes = false
      this.scaleDt -= this.zoomSize
    } else {
      if (isDec=='in') {
        listItem.wheelUp = true
        listItem.wheelDes = false
        this.scaleDt -= this.zoomSize
      } else {
        listItem.wheelUp = false
        listItem.wheelDes = true
        this.scaleDt += this.zoomSize
      }
    }
    this.scaleDt.toFixed(1)
    listItem.scale = this.scaleDt
    this.setTransform(listItem)
    if (listItem.scale < 0) {
      this.scaleDt = 0
      listItem.scale = this.scaleDt
      this.setTransform(listItem)
    }
  }
  // 鼠标按下
  mousedown(event) {
    // 清除滚轮的样式
    const listItem = this.state.imgObj
    listItem.wheelUp = false
    listItem.wheelDes = false
    this.imgTranslateTop = listItem.translateY
      ? listItem.translateY
      : 0
    this.imgTranslateLeft = listItem.translateX
      ? listItem.translateX
      : 0
    listItem.downPositionTop = event.screenY
    listItem.downPositionLeft = event.screenX
    listItem.move = true
  }
  // 鼠标抬起
  mouseup() {
    const listItem = this.state.imgObj
    listItem.move = false
    this.setState({
      imgObj: listItem
    })
  }
  // 鼠标移动
  mousemove(event) {
    const listItem = this.state.imgObj
    if (listItem.move) {
      listItem.translateY =
        event.screenY -
        listItem.downPositionTop +
        this.imgTranslateTop
      listItem.translateX =
        event.screenX -
        listItem.downPositionLeft +
        this.imgTranslateLeft
        this.setTransform(listItem)
    }
  }
  // 点击放大or点击缩小
  clickInOrOut(bool) {
    this.mousewheel({}, bool)
  }
  // 左旋转or右旋转
  rotateLeftOrRight(dir) {
    const listItem = this.state.imgObj
    const direction = dir === 'left' ? -90 : 90
    const Rotate = listItem.rotate
      ? listItem.rotate + direction
      : direction
    listItem.rotate = Rotate
    this.setTransform(listItem)
  }
  // 设置css3 transfrom
  setTransform(item) {
    const listItem = JSON.parse(JSON.stringify(item))
    listItem.transfrom = `translate(${listItem.translateX}px, ${listItem.translateY}px) scale(${listItem.scale}, ${listItem.scale}) rotate(${listItem.rotate}deg)`
    this.setState({
      imgObj: listItem
    })
  }
  render() {
    let imgObj = this.state.imgObj;
      const classNamesImg = classNames(
        {
          imgItem: !imgObj.wheel,
          imgItemWheelUp: imgObj.wheelUp,
          imgItemWheelDes: imgObj.wheelDes,
          imgItemMove: imgObj.move
        }
      )
      const { className, dataSource, showOpt, ...restProps } = this.props
      const classNamesWrapper = classNames("img-wrapper", {
        "img-wrapper-height":showOpt
      })
      
      return (
          <>
          <div
          className={classNames("img-zoom-wrapper", className)}
          
          >
            <div
              className={classNames(classNamesWrapper, classNamesImg)}
              {...restProps}
              onWheel={(event) =>{
                this.mousewheel(event)
              }}
              onMouseMove={(event) =>{
                this.mousemove(event)
              }}
              onMouseDown={(event) =>{
                this.mousedown(event)
              }}
              onMouseUp={(event) =>{
                this.mouseup(event)
              }}
            >

              <img
                className={classNamesImg}
                style={{transform:imgObj.transfrom}}
                src={imgObj.url}
              />
            </div>
            {
              showOpt?
              <div className="img-operate">
                <Icon icon='search-plus'
                title="放大"
                onClick={()=>this.clickInOrOut('out')}
                />
                <Icon icon='search-minus'
                title="缩小"
                onClick={()=>this.clickInOrOut('in')}
                />
                <Icon icon='undo-alt'
                title="旋转"
                onClick={()=>this.rotateLeftOrRight('left')}
                />
                <Icon icon='redo-alt'
                title="旋转"
                onClick={()=>this.rotateLeftOrRight('right')}
                />
            </div>
            : null
            }

          </div>
          </>
      );
  }
}
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
    url: '', // 图片url
    scale: 1, // 缩放
    rotate: 0,// 旋转
    translateX: 0, // X轴移动距离
    translateY: 0, // Y轴移动距离
  },
  showOpt: true,
};
export default ImgZoom;