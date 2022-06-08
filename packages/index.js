import V3BreadItem from './v3-bread-item'
import V3Bread from './v3-bread'
import V3Button from './v3-button'
import V3Carousel from './v3-carousel'
import V3Checkbox from './v3-checkbox'
import V3Dialog from './v3-dialog'
import V3InfiniteLoading from './v3-infinite-loading'
import V3Pagination from './v3-pagination'
import V3Stepsitem from './v3-steps-item'
import V3Steps from './v3-steps'
import V3TabsPanel from './v3-tabs-panel'
import V3Tabs from './v3-tabs'
import confirm from './confirm'
import message from './message'
import './fonts/iconfont.css'
const components = [
  V3BreadItem,
  V3Bread,
  V3Button,
  V3Carousel,
  V3Checkbox,
  V3Dialog,
  V3InfiniteLoading,
  V3Pagination,
  V3Stepsitem,
  V3Steps,
  V3TabsPanel,
  V3Tabs
]
const install = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
  app.config.globalProperties.$message = message
  app.config.globalProperties.$confirm = confirm
}
// 如果直接调用插件，就不调用vue.use方法
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
