import Vue from 'vue'
import VueMeta from 'vue-meta'
import page from './test.vue'
import router from './router/index'
import '../../plugin/amfe-flexible'
import fastClick from 'fastclick'
import '../../plugin/Vant'
import promise from 'es6-promise'
// 组件注册
import ZSComponent from './../../components/index'
import store from "../../store"

fastClick.attach(document.body)
Vue.use(ZSComponent)
Vue.use(VueMeta)
promise.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#page',
  store,
  router,
  render: h => h(page)
})
