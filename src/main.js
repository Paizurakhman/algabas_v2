import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// global styles
import './assets/base.sass'
// responsive style
import './assets/responsive.sass'
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
const getImageFunc = {
    staticImgUrl: (img) => {
        return 'http://static-collibri.astudiodigital.ru/' + img
    }
}
let colorsOne = ['FCD635', '06DC02', 'F8931D']
let colorsTwo = ['FFED2B', '3EEB3B', 'FF9900']

Vue.directive('random', {
    bind(el, binding, vnode) {
        let index = vnode.key % 3
        el.style.background = "linear-gradient(90deg, #" + colorsOne[index] + " 0%, #" + colorsTwo[index] + " 100%)"
    }
})

Vue.prototype.$axios = axios;
Vue.prototype.$lang = 'ru';
Vue.prototype.$staticImageUrl = getImageFunc;
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')