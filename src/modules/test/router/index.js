import Vue from 'vue'
import Router from 'vue-router'

// 注：合同详情 我的配置 资金对账单 基本信息 修改密码 中的 页面 路由单独切换在 底部第一个路由（购销大厅）

// 合同详情
// const orderDetail = r => require.ensure([], () => r(require('../orderDetail/orderDetail')), 'orderDetail')
// const saleDetail = r => require.ensure([], () => r(require('../orderDetail/saleDetails')), 'saleDetail')
// const statementDetail = r => require.ensure([], () => r(require('../orderDetail/statementDetails')), 'statementDetail')

// 我的配置
const minePageOne = r => require.ensure([], () => r(require('../myConfig/minePageOne')), 'minePageOne')
// const minePageTwo = r => require.ensure([], () => r(require('../myConfig/minePageTwo')), 'minePageTwo')

// 资金对账单
// const fundIndex = r => require.ensure([], () => r(require('../statementFund/fundIndex')), 'fundIndex')
// const detailsFund = r => require.ensure([], () => r(require('../statementFund/detailsFund')), 'detailsFund')

// 基本信息
// const essenInformation = r => require.ensure([], () => r(require('../myConfig/essentInformation')), 'essenInformation')

// 修改密码
// const changePwd = r => require.ensure([], () => r(require('../myConfig/changePassword')), 'essenInformation')

// 订单管理 =>预成交、已成交   ==>底部第二个路由（订单管理）
const orderM = r => require.ensure([], () => r(require('../Management/index')), 'orderM')
const noDeal = r => require.ensure([], () => r(require('../Management/noDeal')), 'noDeal')
const yesDeal = r => require.ensure([], () => r(require('../Management/yesDeal')), 'yesDeal')

// 赊销使用明细  ==>底部第三个路由（资金管理）
const saleIndex = r => require.ensure([], () => r(require('../saleDetailAll/index')), 'saleIndex')
const saleDetailAll = r => require.ensure([], () => r(require('../saleDetailAll/saleDetailAll')), 'saleDetailAll')

// 出入金  ==>底部第四个路由（关于我的）
const goldIndex = r => require.ensure([], () => r(require('../outofGold/index')), 'goldIndex')
const withdraw = r => require.ensure([], () => r(require('../outofGold/withdraw')), 'withdraw')
const inGolden = r => require.ensure([], () => r(require('../outofGold/inGolden')), 'inGolden')

Vue.use(Router)

const router = new Router({
  // mode: 'history',npm
  linkExactActiveClass: 'active',
  routes: [{
    path: '/mobile/orderDetail',
    component: minePageOne
  }, {
    path: '/mobile/orderM',
    component: orderM,
    redirect: '/mobile/orderM/noDeal',
    children: [{
      path: 'noDeal',
      component: noDeal,
      meta: {
        requireAuth: true
      }
    }, {
      path: 'yesDeal',
      component: yesDeal,
      meta: {
        requireAuth: true
      }
     }]
  }, {
    path: '/mobile/saleIndex',
    component: saleIndex,
    redirect: '/mobile/saleIndex/saleDetailAll',
    children: [{
      path: 'saleDetailAll',
      component: saleDetailAll,
      meta: {
        requireAuth: true
      }
    }]
  }, {
    path: '/mobile/goldIndex',
    component: goldIndex,
    redirect: '/mobile/goldIndex/withdraw',
    children: [{
      path: 'withdraw',
      component: withdraw,
      meta: {
        requireAuth: true
      }
    }, {
      path: 'inGolden',
      component: inGolden,
      meta: {
        requireAuth: true
      }
    }]
  }]
})

export default router
