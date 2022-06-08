import V3Message from './v3-message'
import { createVNode, render } from 'vue'
const div = document.createElement('div')
div.setAttribute('class', 'v3-message-container')
let timer = null
document.body.appendChild(div)
export default ({ type, text }) => {
  const vn = createVNode(V3Message, { type, text })
  render(vn, div)
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 2500)
}
