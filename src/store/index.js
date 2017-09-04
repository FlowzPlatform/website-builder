import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        content: null,
        fileUrl: null,
        currentIndex: null,
        LayoutOptions: [{
          value: 'Blank',
          label: 'Blank'
        }],

        HeaderOptions: [{
          value: 'NOH',
          label: 'NoHeader'
        }],

        FooterOptions: [{
          value: 'NOF',
          label: 'NoFooter'
        }],
        PageLayoutValue : ''
    },
    mutations: {
        ADD_TODO(state, text) {
            state.content = text
        }
    },
    actions: {
        updateContent({ commit }, { text }) {
            commit('ADD_TODO', text)
        },
    },
    plugins: [createPersistedState()]
    // getters: {},
    // modules: {}
})
// export default store