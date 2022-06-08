<template>
  <div class="v3-confirm" :class="{fade}">
    <div class="content" :class="{fade}">
      <div class="header">
        <h3>{{title}}</h3>
         <a
          href="JavaScript:;"
          class="v3-icon-close"
          @click="cancelCallback()"
        ></a>
      </div>
      <div class="body">
        <i class="v3-icon-prompt"></i>
        <span>{{text}}</span>
      </div>
      <div class="footer">
         <V3Button @click="cancel">取消</V3Button>
    <V3Button type="primary" @click="submit">确认</V3Button>
      </div>
    </div>
  </div>
</template>

<script>
import V3Button from './v3-button.vue'
import { onMounted, ref } from 'vue'
export default {
  name: 'V3Confirm',
  components: { V3Button },
  props: {
    title: {
      type: String,
      default: '温馨提示'
    },
    text: {
      type: String,
      default: '主要内容'
    },
    cancelCallback: {
      type: Function
    },
    submitCallback: {
      type: Function
    }
  },
  setup (props) {
    const fade = ref(false)
    onMounted(() => {
      setTimeout(() => {
        fade.value = true
      }, 0)
    })
    const cancel = () => {
      props.cancelCallback()
    }
    const submit = () => {
      props.submitCallback()
    }
    return { fade, cancel, submit }
  }
}
</script>

<style lang='scss' scoped>
.v3-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .content {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .header,
    .footer {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
    }
    .body {
      padding: 10px 40px;
      font-size: 16px;
      .v3-icon-prompt {
        color: #e6a23c;
        margin-right: 3px;
        font-size: 20px;
      }
    }
    .footer {
      text-align: right;
      margin-bottom: 10px;
      .v3-button{
        padding: 7px 10px;

      }
    }
    .header {
      position: relative;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 25px;
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
  }
}
</style>
