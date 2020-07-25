# 标题栏Header

## 资源
[视觉](http://cdp.release.ctripcorp.com/project/sketch/%E3%80%90%E8%87%AA%E7%94%B1%E8%A1%8CUI%E7%BB%84%E4%BB%B6%E5%BA%93%E3%80%91TitleBar%E6%A0%87%E9%A2%98%E6%A0%8F/) 张婷 | 开发 廖雨飞

## 使用

```js
import { Header } from '@ctrip/rn-koala'

<Header
    page={this}
    title="Header-SideTool+IM+Coupon"
    hasSideTool={true}
    renderIM={this.renderIM}
    subtitle="subTitle"
    renderCoupon={this.renderCoupon}
/>
```

## API

| 属性              | 说明                                 | 类型                           | 默认值   | 必选 |
| ----------------- | ------------------------------------ | ------------------------------ | -------- | ---- |
| page              | page 实例，默认 page.pop()回退       | Page                           |          |      |
| pageId            | 页面 pageId，埋点及 sidetoolbox 需要(传page实例的可以不用传) | string                         |          |      |
| back              | 回退方法,优先取 back 回退            | ()=>void                       |          |      |
| title             | 页面名称                             | string                         \| string[] |      |  |
| subtitle          | 页面子标题                           | string                         |          |      |
| hasSideTool       | 是否需要 sidetoolbox                 | boolean                        |          |      |
| hasShare          | 是否需要 sidetoolbox 中的分享        | boolean                        |          |      |
| headerColor       | 头的颜色                             | 'white'                        | 'white'  |      |
| notAbsoluteCenter | 不需要中间部分绝对居中               | boolean                        | false    |      |
| renderCoupon      | 渲染优惠券组件                       | () => React.ReactElement\<any> |          |      |
| renderIM          | 渲染 IM 组件                         | () => React.ReactElement\<any> |          |      |
| renderCenterView  | 自定义头部中间内容：例如搜索框       | () => React.ReactElement\<any> |          |      |
| hasTransparent    | 是否需要透明头，页面有头图时         | boolean                        |          |      |
| offsetY           | 页面滚动 Y，有透明头时需要           | number                         |          |      |

## 示例

![](./image/header.png#wh3)
