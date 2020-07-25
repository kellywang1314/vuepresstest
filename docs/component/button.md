# 按钮Button

## 资源
[视觉](http://cdp.release.ctripcorp.com/project/sketch/%E8%87%AA%E7%94%B1%E8%A1%8Cctrip%E8%A7%86%E8%A7%89%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83/index.html#artboard9) 张婷 | 开发 陈思思

## 使用
```js
import { Button } from '@ctrip/rn-koala'
// 最大宽度
<View style={{flexDirection: 'column'}}>
    <Button type="action-primary" content="按钮文案" size="large" />
</View>

// 最小宽度（即文字宽度+默认padding）
<View style={{flexDirection: 'row'}}>
    <Button type="action-primary" content="按钮文案" size="large" />
</View>

// 自定义宽度
<Button buttonStyle={{width: 100}} type="action-primary" content="按钮文案" size="large" />

// 特殊“订”按钮
<Button content="订" size="special" type="action-special"/>

// 自定义按钮内容
<Button type="action-special" size="large">{renderContent()}</Button>
```

## API
| 属性        | 说明               | 类型                                       | 默认值          | 必选 |
| ----------- | ------------------ | ------------------------------------------ | --------------- | ---- |
| content     | 按钮文案           | string                                     |                 | 是   |
| size        | 按钮大小           | [IButtonSizeIndex](#ibuttonsizeindex)      |                 | 是   |
| type        | 按钮类型           | [IButtonTypeIndex](#ibuttontypeindex)      |                 | 是   |
| icon        | 图标               | {name: IICon, position: 'left' 或 'right'} |                 | 否   |
| disable     | 禁用按钮           | boolean                                    | false           | 否   |
| loading     | 加载按钮           | boolean                                    | false           | 否   |
| onPress     | 按钮点击事件       | function                                   |                 | 否   |
| traceKey    | 按钮点击埋点key    | string                                     | 'diy-btn-click' | 否   |
| buttonStyle | 按钮边框自定义样式 | obejct                                     |                 | 否   |
| textStyle   | 按钮文案自定义样式 | obejct                                     |                 | 否   |
| iconStyle   | 按钮图标自定义样式 | obejct                                     |                 | 否   |
| debounce    | 多少毫秒内防连点   | number                                     | 300             | 否   |
| children    | 自定义按钮文案     | React.ReactNode                            |                 | 否   |

### IButtonSizeIndex
'small' | 'medium' | 'large' | 'special' | number (文字按钮时，设置字体大小)

### IButtonTypeIndex
    | 'normal-textButton'
    | 'normal-primary'
    | 'normal-primary-whiteButton'
    | 'normal-secondary'
    | 'normal-secondary-whiteButton'
    | 'normal-tertiary'
    | 'action-textButton'
    | 'action-primary'
    | 'action-primary-whiteButton'
    | 'action-secondary'
    | 'action-secondary-whiteButton'
    | 'action-tertiary'
    | 'action-special'

## 实例
![](./image/button1.png#wh3)![](./image/button2.png#wh3)
