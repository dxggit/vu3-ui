import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vu3Ui from '../packages'
createApp(App).use(router).use(Vu3Ui).mount('#app')
