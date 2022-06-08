<template>
<transition name="fade">
  <div class="v3-dialog" v-if="visible">
    <div class="wrapper" :class="{fade}">
      <div class="header">
        <h3>{{title}}</h3>
         <a
          href="JavaScript:;"
          class="v3-icon-close"
          @click="close"
        ></a>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'V3Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  setup (props, { emit }) {
    const fade = ref(false)
    watch(
      () => props.visible,
      () => {
        setTimeout(() => (fade.value = props.visible))
      },
      { immediate: true }
    )
    const close = () => {
      emit('update:visible', false)
    }
    return { fade, close }
  }
}
</script>

<style lang='scss' scoped>
  .v3-dialog{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
    .wrapper{
      width: 600px;
      background-color: #fff;
      border-radius: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-60%);
      opacity: 0;
      &.fade{
        transition: all 0.4s;
        transform: translate(-50%,-50%);
        opacity: 1;
      }
      .header{
        position: relative;
       height: 60px;
      line-height: 60px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;
         h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 24px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        text-decoration: none;
        &:hover {
          color: #666;
        }
      }
      }
      .body{
         padding: 0 40px;
        font-size: 16px;
        max-height: 520px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        display: none;
      }
      }
      .footer{
         text-align: center;
      padding: 5px 0 20px 0;
      }
    }
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
