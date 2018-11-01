import $ajax from './../../api'

const state = {
  HallData: [],
  HallProductName: null,
  productList: {
    deliveryMode: [],
    payMethod: [],
    product: [],
    productQuality: []
  },
  brandNumberList: {
    BrandList: [],
    saaszsDeliveryPlace: [],
    saaszsPriceCfg: {}
  },
  rowData: {
    id: 0
  },
  HallMorePrice: {}
}

const mutations = {
  setHallData: (state, data) => {
    if (data === 'Refresh') {
      state.HallData = []
      return
    }
    for (let j of data) {
      for (let i of j.priceList) {
        if (i.priceList) {
          for (let k of i.priceList) {
            k.productAttrName = k.productAttr === 'N' ? '立即交付' : '周期交付'
            k.deliveryDateName = new Date(k.deliveryDate).$format("yyyy/MM/dd")
            k.productAttr === 'F' ? k.deliveryDateName += ' 左右' : ''
          }
        } else {
          i.productAttrName = i.productAttr === 'N' ? '立即交付' : '周期交付'
          i.deliveryDateName = new Date(i.deliveryDate).$format("yyyy/MM/dd")
          i.productAttr === 'F' ? i.deliveryDateName += ' 左右' : ''
        }
      }
      state.HallData.push(j)
    }
  },
  setHallProductName: (state, data) => {
    state.HallProductName = data
  },
  setProductList: (state, data) => {
    state.productList = data
  },
  setBrandNumberList: (state, data) => {
    state.brandNumberList = data
  },
  setRowData: (state, data) => {
    if (data.id === 0) {
      state.rowData = data
    } else {
      state.rowData = Object.assign(state.rowData, data)
    }
  },
  setHallMorePrice: (state, data) => {
    state.HallMorePrice = data
  }
}
const actions = {
  getHallData({commit}, data) {
    return $ajax.post('/open/bs/new/offer/getOfferPriceGroupList', data)
  },
  saveHallData({commit}, data) {
    return $ajax.post('/open/bs/new/offer/saveOfferPrice', data)
  },
  getHallNewPlanData() {
    return $ajax.post('/open/bs/templateConfig/getProductList', {})
  },
  getHallBrandNumData({commit}, data) {
    return $ajax.post('/open/bs/templateConfig/getOptionByproductCode', data)
  },
  getHallOfferDetailsData({commit}, data) {
    return $ajax.post('/open/off/contract/offerDetails', data)
  },
  setHallDealData({commit}, data) {
    return $ajax.post('/open/off/contract/offerClinch', data)
  }
}

export default{
  state,
  actions,
  mutations
}
