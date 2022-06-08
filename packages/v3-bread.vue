
<script>
import { h } from 'vue'
export default {
  name: 'V3Bread',
  props: {
    icon: {
      type: String,
      default: 'next'
    }
  },
  render () {
    // 获取默认插槽
    const items = this.$slots.default()
    const dymanicitems = []
    items.forEach((item, i) => {
      dymanicitems.push(item)
      if (i < items.length - 1) {
        dymanicitems.push(h('i', { class: `v3-icon-${this.icon}` }))
      }
    })
    return h('div', { class: 'v3-bread' }, dymanicitems)
  }

}
</script>

<style lang='scss' scoped>
  .v3-bread{
    display: flex;
    padding: 25px 10px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    &-item{
     color: #666;
      :hover{
        cursor: pointer;
      }
    }
  }
</style>
