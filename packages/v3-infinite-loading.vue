<template>
  <div class="v3-infinite-loading" ref="box">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">正在加载更多...</span>
    </div>
     <div class="none" v-if="finished">
       <span class="img"></span>
       <span class="text">亲，没有更多了</span>
     </div>
  </div>
</template>

<script>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from '@vue/reactivity'
export default {
  name: 'V3InfiniteLoading',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const box = ref(null)
    useIntersectionObserver(box, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (props.loading === false && props.finished === false) {
          emit('infinite')
        }
      }
    }, { threshold: 0 })
    return { box }
  }
}
</script>

<style lang="scss" scoped>
.v3-infinite-loading {
  // height: 200px;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url(./fonts/load.gif) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url(./fonts/none.png) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
