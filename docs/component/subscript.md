# 角标Subscript

## 视觉稿
[视觉](http://cdp.release.ctripcorp.com/project/sketch/%E8%87%AA%E7%94%B1%E8%A1%8Cctrip%E8%A7%86%E8%A7%89%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83/index.html#artboard7) 张婷 | 开发 冯申翔

## 类型(点击对应图片直接查看相关文档)
|大角标|小角标|特殊角标|
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
|[![alt bigSubscript](./image/subscript/bigSubscript.png "bigSubscript.png")](#bigsubscript) | [![alt smallScript](./image/subscript/smallSubscript.png "smallSubScript.png")](#smallsubscript) | [![alt triangleOnRight](./image/subscript/triangleOnRight.png "triangleonright.png")](#triangleonright) |

## bigSubscript
| 属性名称     | 数据类型                            | 是否必填                      | 备注 |
|----------|-------------------------------|---------------------------|----|
| text | string                     | 是                         |    |
| backgroundColor      | "white" \| "red" \| "orange" \| "blue" \| "green" \| "gray"                        | 是                      |    |

### 使用
```tsx
<Subscript.big
	text='角标'
	backgroundColor='blue'
/>
```

## smallSubscript
| 属性名称     | 数据类型                            | 是否必填                      | 备注 |
|----------|-------------------------------|---------------------------|----|
| text | string                     | 是                         |    |
| backgroundColor      | "white" \| "red" \| "orange" \| "blue" \| "green" \| "gray"                        | 是                      |    |

### 使用
```tsx
<Subscript.small
	text='角标'
	backgroundColor='blue'
/>
```

## triangleOnRight
| 属性名称     | 数据类型                            | 是否必填                      | 备注 |
|----------|-------------------------------|---------------------------|----|
| text | string                     | 是                         |    |

### 使用
```tsx
<Subscript.triangleOnRight
	text='角标'
/>
```

## 样式
![subscript](./image/subscript/index.png#wh3)