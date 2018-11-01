import Vue from 'vue'
import Router from 'vue-router'
// 新建采购计划(产品属性,交货信息,报价. 相对应的页面)
// const productAttribute = r => require.ensure([], () => r(require('../purchasingHall/productAttribute.vue')), 'productAttribute')
// const deliveryInformation = r => require.ensure([], () => r(require('../purchasingHall/deliveryInformation.vue')), 'deliveryInformation')
// const offer = r => require.ensure([], () => r(require('../purchasingHall/offer.vue')), 'offer')

// 计划详情
// const planDetails = r => require.ensure([], () => r(require('../purchasingHall/planDetails.vue')), 'purchasingHall')

// 产品详情
// const productDetails = r => require.ensure([], () => r(require('../purchasingHall/productDetails.vue')), 'productDetails')

// 报价详情
// const offerDetails = r => require.ensure([], () => r(require('../purchasingHall/offerDetails.vue')), 'offerDetails')

// 新建采购计划(产品属性,交货信息,报价. 相对应的弹窗)
// const deliveryWindow = r => require.ensure([], () => r(require('../purchasingHall/popWindows/deliveryWindow.vue')), 'deliveryWindow')

// 资金管理
// const creditAccount = r => require.ensure([], () => r(require('../fund/creditAccount.vue')), 'creditAccount')

// 我的关注
// const myFocus = r => require.ensure([], () => r(require('../myFollow/myFocus.vue')), 'myFocus')

// 购销大厅
// const buySell = r => require.ensure([], () => r(require('../buySell/buySell')), 'buySell')
//
// 更多报价
// const moreQuotation = r => require.ensure([], () => r(require('../moreQuotation/moreQuotation')), 'moreQuotation')
// const sellPriceDetail = r => require.ensure([], () => r(require('../sellPriceDetail/sellPriceDetail')), 'sellPriceDetail')
// const sellPriceWindow = r => require.ensure([], () => r(require('../sellPriceDetail/sellPriceWindow')), 'sellPriceWindow')
// const dealResult = r => require.ensure([], () => r(require('../sellPriceDetail/dealResult')), 'dealResult')
// const orderDetails = r => require.ensure([], () => r(require('../sellPriceDetail/orderDetails')), 'orderDetails')
const management = r => require.ensure([], () => r(require('../management/management')), 'management')
// const manageWindow = r => require.ensure([], () => r(require('../management/manageWindow')), 'manageWindow')

// 新建卖单
// const newSale = r => require.ensure([], () => r(require('../newSaleTable/newSale')), 'newSale')

// 卖单详情
// const sellDetails = r => require.ensure([], () => r(require('../newSaleTable/sellDetails')), 'sellDetails')

// 编辑卖单
// const editSale = r => require.ensure([], () => r(require('../newSaleTable/editSale')), 'editSale')

// 物流管理
// const physicalManage = r => require.ensure([], () => r(require('../physicalManage/physicalManage')), 'physicalManage')

// const newStore = r => require.ensure([], () => r(require('../newStore/newStore')), 'newStore')

// const detailsStore = r => require.ensure([], () => r(require('../newStore/detailsStore')), 'detailsStore')

// const newRate = r => require.ensure([], () => r(require('../newStore/newRate')), 'newRate')

// const newRateWindow = r => require.ensure([], () => r(require('../newStore/newRateWindow')), 'newRateWindow')

// const configDetails = r => require.ensure([], () => r(require('../newStore/configDetails')), 'configDetails')

// const configDetailsWindow = r => require.ensure([], () => r(require('../newStore/configDetailsWindow')), 'configDetailsWindow')

// 运价配置
// const freightConfig = r => require.ensure([], () => r(require('../freightConfig/freightConfig')), 'freightConfig')

// 运价配置弹窗
// const freightWindow = r => require.ensure([], () => r(require('../freightConfig/freightWindow')), 'freightWindow')

Vue.use(Router)
const router = new Router({
  // mode: 'history',npm
  linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    component: management
  }]
})
export default router
