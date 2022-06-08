<<<<<<< HEAD
# vu3-ui

## 简介

一个vue3常用的ui组件库(暂不支持ts)

## 使用

1. 安装

```
npm i vu3-ui

```

2. 全局注册

```js
import Vu3UI from 'vu3-ui'
Vue.use(Vu3UI)

```

3. 样式导入

```js
import 'vu3-ui/dist/vu3-ui.css'

```

<br>

---

<br>

## 组件

### 按钮(V3Button)

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger                        |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                         |
| disable | Boolean          | 是否禁用按钮，默认为 false                                           |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                         |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                         |
| icon     | String           | 字体图标

<br>

### 单选框(V3Checkbox)

支持使用v-model双向绑定选框的选择状态，支持change(newVal)事件，newVal为改变后的值

### 面包屑(V3BreadItem、V3Bread)

使用函数方式动态计算，最后一个面包屑不会生成指示箭头

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| to     | String           | 支持路由跳转地址

<br>

```vue
<template>
  <div id="app">
     <V3Bread>
    <V3BreadItem to="/">11</V3BreadItem>
    <V3BreadItem>22</V3BreadItem>
    <V3BreadItem>33</V3BreadItem>
    <V3BreadItem>44</V3BreadItem>
  </V3Bread>
  </div>
</template>
<script>

</script>
<style>

</style>

```

### 轮播图(V3Carousel)

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| sliders     | Array           | 考虑到业务需求，数组中的每个值必须是对象形式，必须有imgUrl，该key值为图片的地址       |
| duration    | Number          | 轮播延迟时间，默认2000ms                                         |
| autoplay   | Boolean          | 是否自动轮播

<br>

### V3Dialog

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| visible     | Boolean         | 弹出框的显示与隐藏    |
| title   | String          | 弹出框的标题

<br>

<br>

 插槽     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| footer     |          | 底部插槽，可以根据需要添加组件    |
| 默认插槽   |           | 弹出框的主要内容，可以根据需求添加|

<br>

```vue
<template>
  <div id="app">
    <V3Dialog v-model:visible='visible'>
    <div>主体</div>
    <template v-slot:footer>
      <V3Button  @click="close">取消</V3Button>
    <V3Button type="primary">确认</V3Button>
    </template>
  </V3Dialog>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const visible = ref(false)
    const close = () => {
      visible.value = false
    }
    return { visible, close }
  }
}
</script>

```
### 无限加载组件(V3InfiniteLoading)

该组件的使用不需要将列表内容包裹，只用在列表的下方使用该组件即可

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| loading     | Boolean         | 数据的加载状态，默认为false    |
| finished   | Boolean          | 数据是否加载完毕，默认为false

<br>

<br>

| 事件     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| infinite   |           | 内容触底时触发的函数，只有当loading和finished为false的时候才会触发

<br>

```vue
<template>
  <div id="app">
    <div class="box">
    <ul class="list">
      <li v-for="i in count" :key="i">{{i}}</li>
    </ul>
    <V3InfiniteLoading :finished="finished" :loading="loading" @infinite='loadingMore'></V3InfiniteLoading>
  </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const count = ref(10)
    const loading = ref(false)
    const finished = ref(false)
    const loadingMore = async () => {
      loading.value = true
      await setTimeout(() => {
        count.value += 10
        if (count.value > 90) {
          finished.value = true
        }
      }, 1000)
      loading.value = false
    }
    return { loading, finished, count, loadingMore }
  }
}
</script>
<style>

</style>

```

### 分页组件(V3Pagination)

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| total      | Number          | 数据总条数 |
| pageSize   | Number          | 每页显示的条数 |
| currentPage   | Number       | 当前显示的页码值

<br>

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| current-change   |        | 点击当前页的回调函数，参数为点击当前页的页码值

<br>

### 步骤条组件(V3Stepsitem、V3Steps)

需要两个组件配合使用，使用jsx语法实现

V3Stepsitem属性

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| title | String      |  步骤名称      |
| desc  |  String     |  步骤描述     

<br>

V3Steps属性

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| active | Number      |  激活步骤      

<br>

### 菜单栏(V3TabsPanel、V3Tabs)

V3TabsPanel组件属性

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| name | String      |  菜单栏名称,用来控制对应内容的显示    |
| lable | String     |  菜单栏标题    

<br>

V3Tabs属性

使用v-model双向绑定激活的菜单，tab-click回调函数，点击菜单时触发，回调参数为当前点击的菜单名称及索引

```vue
<template>
  <div id="app">
    <V3Tabs v-model="activeName" @tab-click="tabClick">
      <V3TabsPanel name="panel1" lable="11">内容1</V3TabsPanel>
      <V3TabsPanel name="panel2" lable="22">内容2</V3TabsPanel>
    </V3Tabs>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const activeName = ref('panel1')
    const tabClick = (tab) => {
      activeName.value = tab.name
    }
    return { activeName, tabClick }
  }
}
</script>

```

### $message 函数组件

在全局注册组件库后，会在Vue原型上挂载$message方法，在组件中直接使用vm.$message()方法即可，该方法接受一个对象作为参数，key如下

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| text | String      |  提示消息内容    |
| type | String     |  提示信息的类型，可选值warn、error、success

<br>

```vue
<template>
  <div id="app">
    <V3Button @click="btnClick">普通按钮</V3Button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const btnClick = () => {
      proxy.$message({ text: '提示信息', type: 'success' })
    }
    return { btnClick }
  }
}
</script>

```

### $confirm  函数组件

在全局注册组件库后，会在Vue原型上挂载$confirm方法，在组件中直接使用vm.$confirm()方法即可，该方法接受一个对象作为参数，key如下

<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| title | String      |  弹出框标题，默认值为温馨提示    |
| text | String     |  提示框的内容                     

<br>

该组件支持异步，在点击按钮后会触发异步操作并关闭提示框，直接点击取消和关闭按钮会抛出错误，需要捕获错误，防止报错

```vue
<template>
  <div id="app">
    <V3Button @click="btnClick">普通按钮</V3Button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  setup () {
    const { proxy } = getCurrentInstance()
    const btnClick = () => {
       proxy.confirm({ title: '提示', text: '确认删除么？' }).then(() => {
        proxy.message({ text: '删除成功' })
      }).catch(err => {
        console.log(err)
      })
    }
    return { btnClick }
  }
}
</script>

```
=======
# vu3-ui
>>>>>>> origin/main
