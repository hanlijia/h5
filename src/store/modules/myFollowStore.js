import $ajax from './../../api'

const state = {
  ProductData: []
}

const mutations = {
  setProductListData: (state, data) => {
    state.ProductData = data
  },
  setFocusedSta: (state, data) => {
    state.MyFocusedData = data
  }
}
const actions = {
  getProductListData({commit}, data) {
    return $ajax.post('/open/bs/userAttent/getUserAttentH5', data)
  },
  setFocusStaData({commit}, data) {
    return $ajax.post('/open/bs/userAttent/saveOrCancelAttentH5', data)
  }
}

export default{
  state,
  actions,
  mutations
}
