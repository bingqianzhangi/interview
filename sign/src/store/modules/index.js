// 原始数据
const state = {
  longitude: '80',
  latitude: '123'
}

// 派生数据
const getters = {

}

// 异步改变
const actions = {
  getLocation({commit}, payload){
      wx.getLocation({
          type: 'wgs84',
          success (res) {
              commit('updateLocation', res)
          }
      })
  }
}

// 同步改变, 改变数据的唯一途径
const mutations = {
  updateLocation(state, payload){
      state.longitude = payload.longitude
      state.latitude = payload.latitude
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}