# 界面特殊状态ExceptionStatus

## 资源

[视觉](http://cdp.release.ctripcorp.com/project/sketch/[自由行组件库]界面特殊状态/) 张婷 | 开发 冯申翔

## 参数

| 属性名称  |                           数据类型                           | 是否必填 | 备注                                                         |
| :-------: | :----------------------------------------------------------: | :------: | ------------------------------------------------------------ |
|   type    | "error" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_error.png" style="zoom:10%;" /> "noOrder" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_order.png" style="zoom:10%;" /> "noHistory" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_history.png" style="zoom:10%;" /> "noCollection" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_collection.png" style="zoom:10%;" /> "noResult" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_result.png" style="zoom:10%;" /> "noInformation" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_info.png" style="zoom:10%;" /> "noImage" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_pic.png" style="zoom:10%;" /> "noNetwork" <img src="https://pic.c-ctrip.com/VacationH5Pic/taocan/dp2/koala_pub_no_wifi.png" style="zoom:10%;" /> |    是    |                                                              |
| direction | "horizontal" <img src="./image/exceptionStatus/horizontal.png" style="zoom:40%;" /> "vertical" <img src="./image/exceptionStatus/vertical.png" style="zoom:40%;" /> |          |                                                              |
|   text    | ({ type: 'textOnly'; text: *string*; textStyle?: *TextStyle* } \| { type: 'textStitched', leftText: *string*, rightWeakIndicate: { text: *string*; onPress: () **=>** *void*; textStyle?: *TextStyle* })[] |    是    | 分为两行,均可选,一般第一行为文字, 第二行可能包含文字或者轻引导按钮（新增自定义文本样式2020.4.10） |
|  button   |        {text: *string*; onPress: () **=>** **void**;}        |    否    |                                                              |

### 使用

```tsx
<ExceptionStatus
	type='error'
	text=[
		{
			type:'textOnly',
			text:'加载未成功, 请稍后再试',
		},
		{
			type:'textStitched',
			leftText:'如长时间无法解决请',
			rightWeakIndicate:{
				text:'反馈给我们',
				onPress:function onPress() {},
			},
		},
	]
	button={
		text:'再试一次',
		onPress:function onPress() {
      alert('button clicked');
    },
	}
/>
```

## 样式

![ExceptionStatus](./image/exceptionStatus/index.png#wh3)