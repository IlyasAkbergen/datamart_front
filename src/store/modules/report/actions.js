import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  getGeneralReport ({ commit }, data) {
    commit('setLoading', true)
    return axios.post('/get_general_report', data).then((res) => {
      commit('setGeneralReport', res.data.general_report)
      commit('setLoading', false)
      return res.data
    }).catch(() => {
      commit('setLoading', false)
    })
  }
}
