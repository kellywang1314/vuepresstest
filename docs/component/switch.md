
# 开关Switch

## 视觉稿
[视觉](http://cds.ued.ctripcorp.com/?cat=253) 公共 | 开发 王亚男

## 使用

```js
import { Switch } from '@ctrip/rn-koala'
let props = {
    value: true,
    disabled: false,
    size:'s',
    thumbColor: '#FFFFFF',
    trackOnColor: 'green',
    onValueChange: (value: boolean) => {
        console.log(value)
    }
}
<Switch {...props }>
</Switch>
```

## API

| 属性      | 说明           | 类型                                               | 默认值 | 必选 |
| --------- | -------------- | -------------------------------------------------- | ------ | ---- |
| style     | 样式          | any                                                  |        |      |
| size      | 尺寸         | 'xs'\|'s'                                              |      s  |      |
| width     |  自定义宽      | number                                               |        |      |
| height     | 自定义高     | number                                              |        |      |
| thumbRadius |自定义按钮弧度 |  number                                             |       |      |
| value       | 表示此开关是否打开     | boolean                                    |  true    |        |
| thumbColor  | 圆形按钮的颜色 |string
| trackOnColor |轨道打开的颜色 | string              |          |         |
| trackOffColor | 开关处于关闭状态时 |string                                         |          |         |  
| disabled | 是否禁用 | boolean                                                    | false      |         | 
|onValueChange | 值改变时候调用的回调函数 |(value: boolean) => void                   |          |         |


#### trackOnColor
switch开关处于打开状态时，轨道的颜色 支持blue（默认）/green/orange三种标准色，或者自己传入颜色


## 示例

![](./image/switch.png#wh3)