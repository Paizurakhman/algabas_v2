import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
// global styles
import './assets/base.sass'
// responsive style
import './assets/responsive.sass'
import VueTheMask from 'vue-the-mask'
import { locale } from './lang/localeLang';


// Slider
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

Vue.use(Vuelidate)

Vue.use(VueTheMask)
const getImageFunc = {
    staticImgUrl: (img) => {
        return 'https://cdn.sadik-algabas.kz/' + img
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
Vue.prototype.$lang = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'ru';
Vue.prototype.$staticImageUrl = getImageFunc;
Vue.config.productionTip = false;
Vue.prototype.$locale = locale;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')