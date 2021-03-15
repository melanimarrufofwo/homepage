import wow from 'wowjs'
import 'wowjs/css/libs/animate.css'
import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$wow = wow
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
