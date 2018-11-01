import $ajax from './../../api'

const state = {
  LogisticsWrehouseList: {},
  logisticsRowData: {},
  logisticsPriceMData: {}
}

const mutations = {
  setLogisticsWrehouseList: (state, data) => {
    state.LogisticsWrehouseList = data
  },
  setLogisticsRowData: (state, data) => {
    state.logisticsRowData = data
  },
  setLogisticsPriceMData: (state, data) => {
    if (data === 'Refresh') {
      state.logisticsPriceMData = []
      return
    }
    for (let i of data) {
      state.logisticsPriceMData.push(i)
    }
  }
}
const actions = {
  getLogisticsWrehouseList({commit}, data) {
    return $ajax.post('/open/bs/logistics/warehouseH5List', data)
  },
  SaveLogisticsStoreData({commit}, data) {
    return $ajax.post('/open/bs/logistics/warehouseSave', data)
  },
  getLogisticsPriceMData({commit}, data) {
    return $ajax.post('/open/bs/logistics/logisticsList', data)
  },
  SaveLogisticsPriceData({commit}, data) {
    return $ajax.post('/open/bs/logistics/logisticsSave', data)
  },
  setLogisticsExamineState({commit}, data) {
    return $ajax.post('/open/bs/logistics/auditLogisticsLine', data)
  },
  setAllLogisticsPriceData({commit}, data) {
    return $ajax.post('/open/bs/logistics/modifyLogisticsPrice', data)
  }
}

export default{
  state,
  actions,
  mutations
}
