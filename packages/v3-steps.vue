<script>
import { getCurrentInstance } from 'vue'

export default {
  name: 'V3Steps',
  props: {
    active: {
      type: Number,
      default: 1
    }
  },
  render () {
    const { proxy } = getCurrentInstance()
    const items = proxy.$slots.default()
    const dynamicItems = []
    items.forEach((item) => {
      if (item.type.name === 'V3Stepsitem') {
        dynamicItems.push(item)
      } else {
        // console.log(item)
        item.children.forEach((c) => {
          dynamicItems.push(c)
        })
      }
    })
    const itemsJsx = dynamicItems.map((item, i) => {
      return (
        <div class="v3-steps-item" class={{ active: i < this.active }}>
          <div class="step">
            <span>{i + 1}</span>
          </div>
          <div class="title">{item.props.title}</div>
          <div class="desc">{item.props.desc}</div>
        </div>
      )
    })
    return <div class="v3-steps">{itemsJsx}</div>
  }
}
</script>
<style lang="scss">

.v3-steps {
  display: flex;
  text-align: center;
  &-item {
    flex: 1;
    &:first-child {
      .step {
        &::before {
          display: none;
        }
      }
    }
    &:last-child {
      .step {
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .step {
        > span {
          border-color: #409eff;
          background: #409eff;
          color: #fff;
        }
        &::before,
        &::after {
          background: #409eff;
        }
      }
      .title {
        color: #409eff;
      }
    }
    .step {
      position: relative;
      > span {
        width: 48px;
        height: 48px;
        font-size: 28px;
        border: 2px solid #e4e4e4;
        background: #fff;
        border-radius: 50%;
        line-height: 44px;
        color: #ccc;
        display: inline-block;
        position: relative;
        z-index: 1;
      }
      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 23px;
        width: 50%;
        height: 2px;
        background: #e4e4e4;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .title {
      color: #999;
      padding-top: 12px;
    }
    .desc {
      font-size: 12px;
      color: #999;
      padding-top: 6px;
    }
  }
}
</style>
