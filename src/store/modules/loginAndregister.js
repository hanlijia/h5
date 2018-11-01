import $ajax from './../../api'

const state = {
  login: {
    uName: "",
    uPwd: ""
  },
  loginData: {
    id: 0,
    name: "",
    companyName: "",
    AccessToken: ""
  },
  register: {
    email: "",
    phone: 0,
    code: 0,
    loginName: "",
    loginPwd: ""
  },
  newPwd: ""
}

const mutations = {
  getToken (state, data) {
    state.loginData.AccessToken = data
    $ajax.defaults.headers.common["AccessToken"] = data
  },
  getLoginName(state, data) {
    state.loginData.name = data
  },
  getLoginId(state, data) {
    state.loginData.id = data
  },
  getCompanyName(state, data) {
    state.loginData.companyName = data
  }
}
const actions = {
  // login
  loginAjax ({commit}, data) {
    return $ajax.post('/open/bs/userAccount/login', data)
  },
  // 短信验证码
  registerShortMessageAjax ({commit}, data) {
    return $ajax.post('/open/bs/userAccount/sendSms', data)
  },
  // oauth
  sendOauthData ({commit}, data) {
    return $ajax.post('/open/wx/outh', data)
  }
}

export default{
  state,
  actions,
  mutations
}
