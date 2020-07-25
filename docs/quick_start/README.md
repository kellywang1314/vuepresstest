# 快速接入

## 安装

```bash
npm install h5-koala
```

## 使用

```js
import { Button } from 'h5-koala'
```

## 示例

*rn_diytour_s* 项目中可直接引用 KitsWrapper 页面查看具体信息

```js
import { Page, ViewPort } from '@ctrip/crn'
import { KitsWrapper } from '../__component__/kitsWrapper'

export default class Example extends Page {
    render() {
        return (
            <ViewPort>
                <KitsWrapper forward={this.push.bind(this)}>
                    <YourPage/>
                </KitsWrapper>
            </ViewPort>
        )
    }
}
```

