<template>
  <div class="v3-bread-item">
    <router-link class="link" v-if="to" :to="to"><slot></slot></router-link>
    <span class="text" v-else><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'V3BreadItem',
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.v3-bread-item{
  .link{
    cursor: pointer;
    text-decoration: none;
    color: #444;
  }
  :hover{
    color: #489eff;
  }
}
</style>
