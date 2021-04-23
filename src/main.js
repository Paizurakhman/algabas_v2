import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// global styles
import './assets/base.sass'
// responsive style
import './assets/responsive.sass'

const getImageFunc = {
    staticImgUrl: (img) => {
        return 'http://static-collibri.astudiodigital.ru/' + img
    }
}

Vue.prototype.$axios = axios;
Vue.prototype.$lang = 'ru';
Vue.prototype.$staticImageUrl = getImageFunc;

Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')