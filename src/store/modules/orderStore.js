import $ajax from './../../api'

const state = {
  OrderIntData: {},
  OrderRobotData: {},
  OrderRowdata: {}
}

const mutations = {
  setOrderIntData: (state, data) => {
    if (data === 'Refresh') {
      state.OrderIntData = []
      return
    }
    for (let i of data) {
      i.productAttrName = i.productAttr === 'N' ? '立即交付' : '周期交付'
      i.deliveryDateName = new Date(i.deliveryDate).$format("yyyy/MM/dd")
      i.contractTimeName = new Date(i.contractTime).$format("yyyy/MM/dd hh:mm:ss")
      state.OrderIntData.push(i)
    }
  },
  setOrderRobotData: (state, data) => {
    if (data === 'Refresh') {
      state.OrderRobotData = []
      return
    }
    for (let i of data) {
      i.productAttrName = i.productAttr === 'N' ? '立即交付' : '周期交付'
      i.deliveryDateName = new Date(i.deliveryDate).$format("yyyy/MM/dd")
      i.contractTimeName = new Date(i.contractTime).$format("yyyy/MM/dd hh:mm:ss")
      state.OrderRobotData.push(i)
    }
  },
  setOrderRowdata: (state, data) => {
    data.productAttrName = data.productAttr === 'N' ? '立即交付' : '周期交付'
    data.deliveryDateName = new Date(data.deliveryDate).$format("yyyy/MM/dd")
    data.contractTimeName = new Date(data.contractTime).$format("yyyy/MM/dd hh:mm:ss")
    state.OrderRowdata = data
  }
}
const actions = {
  getOrderIntData({commit}, data) {
    return $ajax.post('/open/off/contract/findOfferContract', data)
  },
  getOrderRobotData({commit}, data) {
    return $ajax.post('/open/rbt/singleShot/findRbtBidContract', data)
  }
}

export default{
  state,
  actions,
  mutations
}
