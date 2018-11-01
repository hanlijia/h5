import $ajax from './../../api'

const state = {
  sysAllNews: 0,
  sysFocusedNews: [],
  sysBankNews: [],
  sysBusinessNews: []
}

const mutations = {
  setSysAllNews: (state, data) => {
    state.sysAllNews = data
  },
  setSysFocusedNews: (state, data) => {
    if (data === 'Refresh') {
      state.sysFocusedNews = []
      return
    }
    for (let i of data) {
      i.notifyKeyJson = JSON.parse(i.notifyKeyJson)
      i.content = i.content.split("】")[1]
      state.sysFocusedNews.push(i)
    }
  },
  setSysBankNews: (state, data) => {
    if (data === 'Refresh') {
      state.sysBankNews = []
      return
    }
    for (let i of data) {
      i.notifyKeyJson = JSON.parse(i.notifyKeyJson)
      i.content = i.content.split("】")[1]
      state.sysBankNews.push(i)
    }
  },
  setSysBusinessNews: (state, data) => {
    if (data === 'Refresh') {
      state.sysBusinessNews = []
      return
    }
    for (let i of data) {
      i.notifyKeyJson = JSON.parse(i.notifyKeyJson)
      i.content = i.content.split("】")[1]
      state.sysBusinessNews.push(i)
    }
  }
}
const actions = {
  getSysNews ({commit}, data) {
    return $ajax.post('/open/notice/noticeList', data)
  },
  setSysNewsRead ({commit}, data) {
    return $ajax.post('/open/notice/markToReaded', data)
  },
  getSysNewsDetail ({commit}, data) {
    return $ajax.post('open/notice/detail', data)
  }
}

export default{
  // namespaced: true,
  state,
  actions,
  mutations
}
