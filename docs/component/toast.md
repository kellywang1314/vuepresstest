# 临时提示Toast

## 资源

[视觉](http://cds.ued.ctripcorp.com/?cat=161) 公共  | 开发 冯申翔

## 场景(点击其中一种场景查看相关文档)

* [在Page中使用](#page)
* [在function组件中使用](#function)
* [在class组件中使用](#class)

## page

### 使用

```tsx
<Toast callback={({ showToast, closeToast }) => {}}>
	<Page />
</Toast>
```



## function

### 使用

需要先进行[page](#page)的步骤

```tsx
function Component () {
  const { showToast, closeToast } = useToast()
  return <View />
}
```

## class

### 使用

需要先进行[page](#page)的步骤

```tsx
class Component extends React.Component {
  render = () => {
    const { showToast, closeToast } = this.props;
    <View />
  }
}

export default ToastWrapper(Component); 
```


## Toast

Toast需要绑定到整个页面的最外层, 会像整个页面注入一个Context, 其中包含showToast: (params: IUseToast) => void 和 closeToast: () => void, 如果需要直接在最上层调用里面的showToast或者closeToast方法, 传入callback回调即可

| 属性名 |           数据类型           | 是否必填 | 备注 |
| :----: | :--------------------------: | :------: | :--: |
|  children | JSX.Element \| JSX.Element[] |    是    |      |

## ToastWrapper

ToastWrapper是一个高阶组件, 会向传进来的组件传入showToast: (params: IUseToast) => void 和 closeToast: () => void方法

| 属性名 |           数据类型           | 是否必填 | 备注 |
| :----: | :--------------------------: | :------: | :--: |
|  children | JSX.Element \| JSX.Element[] |    是    |      |


## useToast

| 属性名 |                          数据类型                          |    是否必填    |         备注          |
| :----: | :--------------------------------------------------------: | :------------: | :-------------------: |
|  icon  |                          *IIcon*                           |       否       |                       |
|  text  |                          *string*                          |       是       | 1-4个字1s, 5-20个字3s |
| layout | { align?: 'top' \| 'center' \| 'bottom', offset?: number } | 否, 默认正中间 |                       |



## 样式:
**样式有两种, 以是否带icon区分**

![toast](./image/toast.png#wh3)