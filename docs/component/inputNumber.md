# 数字输入框InputNumber

## 资源

[交互](http://cdp.release.ctripcorp.com/project/sketch/%E4%BA%A4%E4%BA%92-RN%E7%BB%84%E4%BB%B6%E5%BA%93/index.html#artboard0) 唐晟 | [视觉](http://cds.ued.ctripcorp.com/?cat=252) 张婷 | 开发 冯申翔



## 注意点

改变值之后有前置条件判断是否要显示的情况,  借助 onChangeValue方法实现

```tsx
<InputNumber.normal
	{...inputNumber}
	onChangeValue={async (num, prevNum) => {
    const judge = await judgePromise(num, prevNum)
		return judge ? num : prevNum;
	}}
/>
```



## 类型(点击对应图片直接查看相关文档)

|                            normal                            |                         unchangeable                          |                           disabled                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| [![alt normal](./image/inputNumber/normal.png "normal.png")](#normal) | [![alt unchangeable](./image/inputNumber/unchangeable.png "unchangeable.png")](#unchangeable) | [![alt disabled](./image/inputNumber/disabled.png "disabled.png")](#disabled) |

## normal

|    属性名称    |    数据类型    | 是否必填 |  备注  |
| :------------: | :------------: | :------: | :----: |
| minusTestID | *string* | 否 |  |
| plusTestID | *string* | 否 |  |
|      min       |    *number*    |    是    | 最小值 |
| max |    *number*    |    是    | 最大值 |
|    step    | *number* |    是    | 步长 |
| value | *number* | 是 | 现值 |
| interpolationList | *number*[] | 否 | 插值列表, 向原有的数据里面混入 |
| onChangeValue | (num: *number*, prevNum: *number*) **=>** Promise<*void* \| *number*> \| *void* \| *number* | 否 | 值变化回调, 如果返回值, 则将这个值作为显示的值 |
| onChangeIrregularValue | (actualNum: *number*, presentNum: *number*) **=>** Promise<*void* \| *number*> \| *void* \| *number* | 否 | 当输入值(包含点击+-按钮和输入框)不在上述范围内的回调 [👉查看讨论](#问-按钮上是否需要加上回调), 如果返回值, 则将这个值作为显示的值 |
| height | *number* | 否 | [👉配合KeyboardAvoidView使用避免键盘遮挡](https://reactnative.dev/docs/keyboardavoidingview) |

### 使用

```tsx
<InputNumber.normal
	min={0}
	max={99}
	step={1}
	value={0}
	onChangeValue=function onChangeValue() {}
/>
```

## unchangeable

| 属性名称 | 数据类型 | 是否必填 | 备注 |
| :------: | :------: | :------: | ---- |
|  value   | *number* |    是    |      |

### 使用

```tsx
<InputNumber.unchangeable
	value={0}
/>
```



## disabled


| 属性名称 | 数据类型 | 是否必填 | 备注 |
| :------: | :------: | :------: | ---- |
|  value   | *number* |    是    |      |

### 使用

```tsx
<InputNumber.disabled
	value={0}
/>
```

## 样式

![checkbox](./image/inputNumber/index.png#wh3)



## 问答

### 问: + - 按钮上是否需要加上回调

答: 加上是有用处的,  但是可能会引导出问题.不加的话现有的参数可能已经可以解决问题

我的回答建立在2个依据之上:

1. 使用InputNumber都需要存储其中的值以用于后续处理
2. 更关心InputNumber的结果, 而不关注过程, 如果inputNumber中值为3, 怎么得到3的过程是不重要的, 重要的是现在这个结果 (溢出范围可能要提醒)

在以上2个论点的支持下, 无论如何你都保存值, 而且所有的处理都需要根据现有的情况来进行处理,故只需要有关于结果的回调即可



特殊场景: 当使用输入框的时候可能会遇到输入值不符合情况的情景,需要回调, 通常可以应用到超出范围的提醒
