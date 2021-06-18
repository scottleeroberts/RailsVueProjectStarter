import axios from '@/backend/axios'

const sessionEndpoint = '/users/session'

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    }
  },
  getters: {
    email(state) {
      return state.user.email
    },
    isGod(state) {
      return !!state.user.isGod
    },
    isLoggedIn(state) {
      return !!state.user
    },
    tenantName(state) {
      return state.user.tenant.name
    },
  },
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post(sessionEndpoint, { session: credentials })
          .then(response => {
            commit('setUserData', response.data)
            resolve()
          })
          .catch(() => {
            reject()
          })
      })
    },
    logout({ commit }) {
      return axios
        .delete(sessionEndpoint)
        .finally(() => {
          commit('clearUserData')
        })
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    clearUserData() {
      localStorage.removeItem('user')
      location.reload()
    },
  },
}
