import Vue from 'vue'
import { Tree } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(Tree)

new Vue({
  el: '#app',
  render: h => h(App)
})
