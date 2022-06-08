
<script>
import { useVModel } from '@vueuse/core'
import { provide } from 'vue'
export default {
  name: 'V3Tabs',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const activeName = useVModel(props, 'modelValue', emit)
    provide('activeName', activeName)
    const tabClick = (name, index) => {
      emit('tab-click', { name, index })
    }
    return { tabClick, activeName }
  },
  render () {
    const panels = this.$slots.default()
    const dynimocPanels = []
    panels.forEach(item => {
      if (item.type.name === 'V3TabsPanel') {
        dynimocPanels.push(item)
      } else {
        item.children.forEach(com => {
          dynimocPanels.push(com)
        })
      }
    })
    const nav = (
      <nav>
        {
          dynimocPanels.map((item, i) => {
            return (
              <a onClick={() => { this.tabClick(item.props.name, i) }}
                class={{ active: this.activeName === item.props.name }}
                href="javascript:;"
              >
                {item.props.lable}
              </a>
            )
          })
        }
      </nav>
    )
    return <div class='v3-tabs'>{[nav, panels]}</div>
  }
}
</script>

<style lang='scss' scoped>
  .v3-tabs {
  background: #fff;
  > nav {
    height: 60px;
    line-height: 60px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    > a {
      width: 110px;
      border-right: 1px solid #f5f5f5;
      text-align: center;
      font-size: 16px;
      text-decoration: none;
      color: #444;
      &.active {
        border-top: 2px solid #409eff;
        height: 60px;
        color: #409eff;
        background: #fff;
        line-height: 56px;
      }
    }
  }
}
</style>
