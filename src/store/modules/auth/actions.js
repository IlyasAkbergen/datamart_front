import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  login ({ commit }, data) {
    return axios.post('auth/login/', data)
      .then((res) => {
        commit('setToken', res.data)
        return res
      })
  },
  logout ({ commit }) {
    return axios.get('/auth/logout')
      .then((res) => {
        commit('delToken')
        return res
      })
  }
}
