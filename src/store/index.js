import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showModal: false,
    },

    mutations: {
        SET_SHOW_MODAL (state) {
            state.showModal = !state.showModal
        }
    },

    actions: {
        GET_MODAL_SHOW ({commit}) {
            commit('SET_SHOW_MODAL')
        }
    },

    getters: {
        SHOW_MODAL (state) {
            return state.showModal
        }
    },
    modules: {}
})