<template>
  <div class="v3-checkbox">
    <input type="checkbox" :checked='checkVal' @click="cheng">
     <span v-if="$slots.default"><slot /></span>
  </div>
</template>

<script>

import { useVModel } from '@vueuse/core'
export default {
  name: 'V3Checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const checkVal = useVModel(props, 'modelValue', emit)

    const cheng = () => {
      const newVal = !checkVal.value
      checkVal.value = newVal
      console.log(newVal)
      emit('change', newVal)
    }
    return {
      cheng,
      checkVal
    }
  }
}
</script>

<style lang="scss" scoped>

.v3-checkbox {
  display: inline-block;
  margin-right: 2px;
  height: 30px;
  line-height: 30px;
  input{

  }
  span {
    margin-left: 2px;
  }
}
</style>
