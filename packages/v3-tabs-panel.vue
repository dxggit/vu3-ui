<template>
  <div class="v3-tabs-panel" v-show="activeName===name">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'V3TabsPanel',
  props: {
    name: {
      type: String,
      default: ''
    },
    lable: {
      type: String,
      default: ''
    }
  },
  setup () {
    const activeName = inject('activeName')
    return { activeName }
  }
}
</script>

<style>

</style>
