# 临时窗口 TemporaryView

## 视觉稿

[视觉](http://cdp.release.ctripcorp.com/project/sketch/%E8%87%AA%E7%94%B1%E8%A1%8C%E8%A7%84%E8%8C%83-%E4%B8%B4%E6%97%B6%E7%AA%97%E5%8F%A3/index.html) 张婷 | 开发 赵一

## 使用

```js
const [display, setdisplay] = useState(false)

display && (
    <TemporaryView
        title="建议单行标题"
        onHide={() => {
            setdisplay(false)
        }}
    >
        <View>
            <Text>展示文本</Text>
        </View>
    </TemporaryView>
)
```

## API

| 属性                       | 说明                                     | 类型        | 默认值    | 必选  |
| -------------------------- | ---------------------------------------- | ----------- | --------- | ----- |
| onHide                     | 关闭视图方法                             | () => void  |           | true  |
| title                      | 标题                                     | string      | undefinde | false |
| needBackgroundClose        | 是否需要点击背景关闭                     | boolean     | false     | false |
| needCloseBtn               | 是否需要关闭按钮                         | boolean     | true      | false |
| needSubmitBtn              | 是否需要确定按钮                         | boolean     | false     | false |
| submitText                 | 自定义提交按钮文案                       | string      | undefinde | false |
| submitStyle                | 自定义提交按钮文案样式                   | TextStyle   | undefinde | false |
| onSubmit                   | 提交按钮点击回调                         | () => void  | false     | false |
| bottomChildren             | 最下方预留区域，用于下方有保存的临时窗口 | JSX.Element |           | false |
| childrenWrapStyle          | 内容区容器样式用于加 padding，防止遮挡   | ViewStyle   |           | false |
| shuffling                  | 是否启用轮播                             | boolean     |           | false |
| shufflingSources           | 轮播图数据数组                           | source[]    |           | false |
| swiperProps                | 轮播组件属性                             | SwiperProps |           | false |
| height                     | [设置蒙层高度](#height枚举值说明)        | enum        | 'tall'    | false |
| closeIconName              | Icon name 自定义关闭按钮图标             | string      |           | false |
| onPressCloseWithoutCombine | 完全自定义关闭按钮行为                   | Function    |           | false |
| page | 页面ctrl（处理蒙层侧滑问题）                   | any    |           | false |

### height 枚举值说明

设置蒙层高度</br>
| 值 | 蒙层高度 |
| -------- | -------- |
| 'taller' | 94% |
| 'tall' | 80% |
| 'middle' | 60% |
| 'short' | 40% |

## 示例

![](./image/temporaryView.png#wh3)
