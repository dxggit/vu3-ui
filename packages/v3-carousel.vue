<template>
  <div class="v3-carousel"  @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item,i) in sliders" :key='i' :class="{fade:index===i}" >

          <img :src="item.imgUrl" alt="" />

      </li>
    </ul>
    <a href="javascript:;" @click="clickLeft" class="carousel-btn prev"><i class="v3-icon-back"></i></a>
    <a href="javascript:;" @click="clickRight" class="carousel-btn next"><i class="v3-icon-next"></i></a>
    <div class="carousel-indicator">
      <span v-for="(item,i) in sliders" :key="i" :class="{active:index===i}" @click="changeIndex(i)"></span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onUnmounted, watch } from '@vue/runtime-core'
export default {
  name: 'V3Carousel',
  props: {
    sliders: {
      type: Array,
      require: true,
      default: () => []
    },
    duration: {
      type: Number,
      default: 2000
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    // 当前显示的图片
    const index = ref(0)
    // 自动轮播
    let timer = null
    const autoplay = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.sliders.length) {
          index.value = 0
        }
      }, props.duration)
    }
    // 监听数据变化
    watch(() => props.sliders,
      (newVal) => {
        if (newVal.length && props.autoplay) {
          index.value = 0
          autoplay()
        }
      },
      { immediate: true }
    )
    // 停止轮播
    const stop = () => {
      if (timer) {
        clearInterval(timer)
      }
    }
    // 开启轮播
    const start = () => {
      if (props.sliders.length && props.autoplay) {
        autoplay()
      }
    }
    // 点击小圆点
    const changeIndex = (i) => {
      index.value = i
    }
    // 点击左右按钮
    const clickLeft = () => {
      index.value--
      if (index.value < 0) {
        index.value = props.sliders.length - 1
      }
    }
    const clickRight = () => {
      index.value++
      if (index.value >= props.sliders.length) {
        index.value = 0
      }
    }
    onUnmounted(() => {
      clearInterval(timer)
    })
    return { index, stop, start, changeIndex, clickLeft, clickRight }
  }
}
</script>

<style lang='scss'>
  .v3-carousel{
    width: 100%;
    height: 100%;
    min-width: 400px;
    min-height: 450px;
    position: relative;
    .carousel{
      &-body{
        width: 100%;
        height: 100%;
      }
      &-item{
        width: 100%;
        height: 100%;
        position: absolute;
        // background-color: aqua;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.5s linear;
        &.fade{
          opacity: 1;
          z-index: 1;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      &-indicator{
        position: absolute;
        left: 0;
        bottom: 20px;
        z-index: 2;
        width: 100%;
        text-align: center;
        span{
          display: inline-block;
          width: 12px;
          height: 12px;
          background-color: rgba($color: #000000, $alpha: 0.2);
          border-radius: 50%;
          cursor: pointer;
          ~ span{
            margin-left: 12px;
          }
          &.active{
            background-color: #fff;
          }
        }
      }
      &-btn{
        position: absolute;
        top: 225px;
        border-radius: 50%;
        z-index: 2;
        text-align: center;
        line-height: 44px;
       opacity: 0;
        width: 44px;
        height: 44px;
        text-decoration: none;
        background-color: rgba($color: #000000, $alpha: 0.4);
        color: #fff;
        transition: all 0.5s;
        &.prev{
          left: 20px;
        }
        &.next{
          right: 20px;
        }

      }
    }
    &:hover{
         .carousel-btn{
            opacity: 1;
         }
        }
  }
</style>
