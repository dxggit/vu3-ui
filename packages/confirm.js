import V3Confirm from './v3-confirm.vue'
import { createVNode, render } from 'vue'
// div容器
const div = document.createElement('div')
div.setAttribute('class', 'v3-confirm-container')
document.body.appendChild(div)
// 渲染
export default ({ text, title }) => {
  return new Promise((resolve, reject) => {
    const cancelCallback = () => {
      render(null, div)
      reject(new Error('点击取消'))
    }
    const submitCallback = () => {
      render(null, div)
      resolve()
    }
    const vn = createVNode(V3Confirm, {
      title,
      text,
      cancelCallback,
      submitCallback
    })
    render(vn, div)
  })
}
