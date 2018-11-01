import Vue from 'vue'
import App from './index.vue'
import store from '../../store/index'
import router from './router/index'
import './../../plugin/amfe-flexible'
import './globalFunction.js'
import fastclick from 'fastclick'
import './../../plugin/Vant'
import VueMeta from 'vue-meta'
// 组件注册
import ZSComponent from './../../components/index'

fastclick.attach(document.body)
Vue.use(VueMeta)
Vue.use(ZSComponent)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
  // const token = window.sessionStorage.getItem("login")
  // const storeToken = store.state.login.loginData.AccessToken
  // if (token && storeToken === "") {
  //   Vue.prototype.haveToken = true
  //   store.commit("getToken", token)
  //   store.commit("getLoginName", window.sessionStorage.getItem("name"))
  //   store.commit("getCompanyName", window.sessionStorage.getItem("companyName"))
  //   store.commit("getLoginId", window.sessionStorage.getItem("id"))
  //   store.commit("getLoginUrl", window.sessionStorage.getItem("url"))
  //   Vue.prototype.uId = window.sessionStorage.getItem("id")
  // }
  // Vue.prototype.isSeller = window.sessionStorage.getItem("companyType") === "C"
  // !token ? Vue.prototype.haveToken = false : ""
  // to.matched.length <= 0 ? window.location.href = "/errPage.html#/" : ''
  // to.meta.requireAuth && !token && to.path !== '/myFollow' ? next({path: '/myFollow'}) : ''
  // next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
