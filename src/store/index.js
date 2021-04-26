import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showModal: false,
        showReviewModal: false
    },

    mutations: {
        SET_SHOW_MODAL (state) {
            state.showModal = !state.showModal
        },
        SET_SHOW_REVIEW (state) {
            state.showReviewModal = !state.showReviewModal
        }
    },

    actions: {
        GET_MODAL_SHOW ({commit}) {
            commit('SET_SHOW_MODAL')
        },
        GET_MODAL_REVIEW ({commit}) {
            commit('SET_SHOW_REVIEW')
        }

    },

    getters: {
        SHOW_MODAL (state) {
            return state.showModal
        },
        SHOW_MODAL_REVIEW (state) {
            return state.showReviewModal
        }
    },
    modules: {}
})