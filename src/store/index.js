// 这里是主要的vuex输出接口；包括mock和真实api暴露的；单文件就可以了；就不再分出state,getters actions这样了；写到一个里面
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/loginAndregister'
import fundStore from './modules/fundStore'
import logisticsStore from './modules/logisticsStore'
import myFollowStore from './modules/myFollowStore'
import orderStore from './modules/orderStore'
import orderMStore from './modules/orderMStore'
import hallStore from './modules/hallStore'
import robotSoldStore from './modules/robotSoldStore'
import sysNewsStore from './modules/sysNewsStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    fundStore,
    logisticsStore,
    myFollowStore,
    orderStore,
    orderMStore,
    hallStore,
    robotSoldStore,
    sysNewsStore
  }
})
