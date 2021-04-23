import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// global styles
import './assets/base.sass'
// responsive style
import './assets/responsive.sass'

Vue.prototype.$axios = axios;
Vue.prototype.$lang = 'ru';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')