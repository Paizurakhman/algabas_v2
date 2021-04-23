import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// global styles
import './assets/base.sass'
// responsive style
import './assets/responsive.sass'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
