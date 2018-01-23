import Vue from 'vue'
import App from './App.vue'

import vueAreaChange from './lib/vue-area-change'
Vue.component(vueAreaChange.name, vueAreaChange)

new Vue({
  el: '#app',
  render: h => h(App)
})
