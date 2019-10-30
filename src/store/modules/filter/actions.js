import { axiosInstance as axios } from '../../../plugins/axios'

export default {
  getRegions ({ commit }, data) {
    return axios.get('/get_regions').then((res) => {
      commit('setRegions', res.data)
      return res.data
    })
  }
}
