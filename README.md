## 使用 React+typescript 的组件库

~~~bash

react实现图片的放大、缩小、旋转及移动功能组件

~~~

<p align="center">
  <img width="400" src="./src/assets/example.png">
</p>

~~~javascript
npm install react-image-zoom --save
~~~

### 使用
~~~javascript

// 引入组件
import { ImgZoom } from 'react-image-zoom'

// 代码示例
<ImgZoom
  dataSource={{
    url: 'static/media/example.e6118d8b.png'
  }}
 />

~~~

<div>
  <h3 style="margin: 20px 0px 0px;">ImgZoom Component</h3>
  <table class="info-table" style="width: 100%;">
    <thead>
      <tr>
        <th width="10%" style="max-width: 10%;min-width: 10%;">property</th>
        <th width="20%" style="max-width: 20%;min-width: 20%;">propType</th>
        <th width="5%" style="max-width: 5%;min-width: 5%;">required</th>
        <th width="5%" style="max-width: 5%;min-width: 5%;">default</th>
        <th width="60%" style="max-width: 60%;min-width: 60%;">description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="info-table-monospace">dataSource</td>
        <td class="info-table-monospace"><span>object</span></td>
        <td>yes</td>
        <td>
          {
            url: '',
            scale: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0
          }
        </td>
        <td>设置 数据源</td>
      </tr>
      <tr>
        <td class="info-table-monospace">className</td>
        <td class="info-table-monospace"><span>string</span></td>
        <td>-</td>
        <td>-</td>
        <td>设置 容器的className</td>
      </tr>
      <tr>
        <td class="info-table-monospace">style</td>
        <td class="info-table-monospace"><span>CSSProperties</span></td>
        <td>-</td>
        <td>-</td>
        <td>设置 每行的style</td>
      </tr>
      <tr>
        <td class="info-table-monospace">showOpt</td>
        <td class="info-table-monospace">bool</td>
        <td>-</td>
        <td>true</td>
        <td>是否显示操作按钮</td>
      </tr>
    </tbody>
  </table>
</div>
