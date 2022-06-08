<template>
<transition name="fade" >
   <div class="v3-message" v-show="visible" :style="style[type]">
    <i :class="[style[type].icon]"></i>
    <span class="text">{{text}}</span>
  </div>
</transition>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'V3Message',
  props: {
    text: {
      type: String,
      default: '提示消息'
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  setup () {
    // 定义一个对象，包含三种情况的样式，对象key就是类型字符串
    const style = {
      warn: {
        icon: 'v3-icon-information',
        color: '#E6A23C',
        backgroundColor: 'rgb(253, 246, 236)',
        borderColor: 'rgb(250, 236, 216)'
      },
      error: {
        icon: 'v3-icon-cancel',
        color: '#F56C6C',
        backgroundColor: 'rgb(254, 240, 240)',
        borderColor: 'rgb(253, 226, 226)'
      },
      success: {
        icon: 'v3-icon-check',
        color: '#67C23A',
        backgroundColor: 'rgb(240, 249, 235)',
        borderColor: 'rgb(225, 243, 216)'
      }

    }
    const visible = ref(false)
    onMounted(() => {
      visible.value = true
    })
    return { style, visible }
  }
}
</script>

<style lang='scss' scoped>
.v3-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}

 .fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ;
}
.fade-enter-from,
.fade-leave-to {
  transform: translate3d(0, -75px, 0);
      opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: none;
}
</style>
