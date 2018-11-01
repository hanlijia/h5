import $ajax from './../../api'

const state = {
  FundPayLogData: [],
  FundCreditAccountData: [],
  FundCompanyListData: [],
  FundCreditCondition: {
    remain: '',
    used: '',
    sum: ''
  }
}

const mutations = {
  setFundPayLogData: (state, data) => {
    if (data === 'Refresh') {
      state.FundPayLogData = []
      return
    }
    for (let i of data) {
      i.hourM = new Date(i.dealTime).$format("hh:mm")
      i.dealTimeName = new Date(i.dealTime).$format("MM月dd日")
      state.FundPayLogData.push(i)
    }
  },
  setFundCompanyListData: (state, data) => {
    if (data === 'Refresh') {
      state.FundCompanyListData = []
      return
    }
    for (let i of data) {
      i.repaymentTime = new Date(i.repaymentTime).$format("yyyy/MM/dd hh:mm")
      state.FundCompanyListData.push(i)
    }
  },
  setFundCreditAccountData: (state, data) => {
    if (data === 'Refresh') {
      state.FundCreditAccountData = []
      return
    }
    for (let i of data) {
      i.repaymentTime = new Date(i.repaymentTime).$format("yyyy/MM/dd hh:mm")
      state.FundCreditAccountData.push(i)
    }
  },
  setFundCreditCondition: (state, data) => {
    state.FundCreditCondition = data
  }
}
const actions = {
  getCreditAccount ({commit}, data) {
    return $ajax.post('/open/bank/repayment/creditAccount', data)
  },
  getFundCompanyListData ({commit}, data) {
    return $ajax.post('/open/bank/repayment/findShouldPayCompany', data)
  },
  getPayLog ({commit}, data) {
    return $ajax.post('/open/bank/repayment/findPayRecord', data)
  },
  getFundRowData({commit}, data) {
    return $ajax.post('/open/bank/repayment/getContractByContractNo', data)
  }
}

export default{
  state,
  actions,
  mutations
}
