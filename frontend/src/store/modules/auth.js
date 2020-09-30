import axios from '@/backend/axios'

export default {
  namespaced: true,
  state: {
    user: null,
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
      return axios
        .post('/users/sign_in', { user: credentials })
        .then(({ data }) => {
          commit('setUserData', { ...data, email: credentials.email })
        })
    },
    logout({ commit }) {
      return axios
        .delete('/users/sign_out')
        .then(() => {
          commit('clearUserData')
        })
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    clearUserData() {
      localStorage.removeItem('user')
      location.reload()
    },
  },
}
