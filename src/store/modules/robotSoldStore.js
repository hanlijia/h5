import $ajax from './../../api'

const state = {
  RobotSoldData: []
}

const mutations = {
  setRobotSoldData: (state, data) => {
    if (data === 'Refresh') {
      state.RobotSoldData = []
      return
    }
    for (let i of data) {
      i.deliveryDateName = new Date(i.deliveryDate).$format("yyyy/MM/dd")
      state.RobotSoldData.push(i)
    }
  }
}
const actions = {
  getRobotSoldData ({commit}, data) {
    return $ajax.post('/open/rbt/singleShot/findSingleShotAll', data)
  },
  getSRobotSoldData({commit}, data) {
    return $ajax.post('/open/rbt/treaty/findTreatyAll', data)
  },
  setRobotDealData({commit}, data) {
    return $ajax.post('/open/rbt/singleShot/saveClinch', data)
  }
}

export default{
  state,
  actions,
  mutations
}
