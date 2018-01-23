# vue-area-change
省区市滑动选择插件

## 安装
```JS
npm install vue-area-change --save
```

## 使用
```JS
//ES6引入
import areaChange from 'vue-area-change'
//require引入
var areaChange = require('AreaChange')

Vue.use(areaChange)

//组件中使用
<vue-area-change></vue-area-change>
```

## 配置

```html
<vue-area-change :isShow="isShow"
                 :font-size="size"
                 active-color="green"
                 :line-height="height"
                 @fade="hidden"
                 @selectdone="doSomething"></vue-area-change>
```

### Props说明

|    参数    |    作用   |   类型   | 默认值 |
| -----------------  | ---------------- | :--------: | :----------: |
| isShow        | 显示插件 |Boolean | false
| font-size       | 省市区文字的大小 |Number| 14 (px)
| active-color        | 被选中的颜色 |String | rgb(84, 193, 153)
| line-height        | 数据的行高 |Number | 30 (px)


### 事件

| name | Description   |
| :--------:   | -----  |
|    fade    |  隐藏插件的事件
|    selectdone    |  选择省市区完成的事件，一并返回位置数据

#### 位置数据格式
```JS
{
  province:"北京"
  city:"北京市",
  district:"海定区",
  location:{
    lat:39.90469
    lng:116.40717
  }
}
```
