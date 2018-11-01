import $ajax from './../../api'

const state = {
  OrderMData: []
}

const mutations = {
  setOrderMData: (state, data) => {
    if (data === 'Refresh') {
      state.OrderMData = []
      return
    }
    for (let i of data) {
      i.productAttrName = i.productAttr === 'N' ? '立即交付' : '周期交付'
      i.deliveryDateName = new Date(i.deliveryDate).$format("yyyy/MM/dd")
      state.OrderMData.push(i)
    }
  }
}
const actions = {
  getOrderMData({commit}, data) {
    return $ajax.post('/open/bs/new/offer/getOfferPriceList', data)
  },
  RevokeOrderMData({commit}, data) {
    return $ajax.post('/open/bs/new/offer/offerBatchSet', data)
  }
}

export default{
  state,
  actions,
  mutations
}
