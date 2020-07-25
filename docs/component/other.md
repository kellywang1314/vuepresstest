# 其他

## 1、便捷工具
### 定义
```js
// 缩放视觉稿给的原始尺寸
function scale(number): number

// 16进制颜色+透明度 --> rgba
function convertColorAndOpacity2Rgba(color: string, opacity: number): string

// rgba --> 16进制颜色+透明度
function convertRgba2ColorAndOpacity(color: string): {
    color: string;
    opacity: number;
}
```

### 使用
```js
width: scale(20) // 得到10

backgroundColor: convertColorAndOpacity2Rgba('#000000', 0.5) // 得到rgba(0, 0, 0, 0.5)

backgroundColor: convertColorAndOpacity2Rgba('rgba(0,0,0,0.5') // 得到{color: #000000', opacity: 0.5}
```

## 2、便捷常量
### 定义
```js
// 不同机型的顶部offset
const topOffset = Platform.OS === 'ios' ? (Device.isiPhoneX ? 44 : 20) : 10

// 屏幕像素密度
const deviceDPR = PixelRatio.get()

// 字重
const fontWeightMap = {
    light: '200',
    regular: '400',
    medium: '700',
    sembold: '700'
}
```

### 使用
