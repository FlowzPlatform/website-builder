import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '@/config'

Vue.use(Vuex)
export const store = new Vuex.Store({
	state: {
		content: null,
		fileUrl: null,
		currentIndex: null,
		updateStats: null,
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
		PageLayoutValue: ''
	},
	mutations: {
		ADD_TODO (state, text) {
			state.content = text
		}
	},
	actions: {
		updateContent ({ commit }, { text }) {
			commit('ADD_TODO', text)
		},

		authenticate ({ commit }, authToken) {
			return axios({
				method: 'get',
				url: config.userDetail,
				headers: {
					'authorization': authToken
				}
			})
				.then(response => {
					if (response) {
						return response.data.data
					} else {

					}
				}).catch(e => {
					console.log('e', e)
					throw e
				})
		}
	},
	plugins: []
	// getters: {},
	// modules: {}
})
// export default store
