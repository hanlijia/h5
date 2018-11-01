import ZSInputUnderline from './input/input-underline.vue'
import SameWindow from './input/sameWindow.vue'
import FundList from './input/fund-list.vue'
import RepaymentList from './input/repayment-list.vue'
import ZSInputList from './input/input-underline-list'
import NewInputList from './newInputList/input-underline-list'
const install = function(Vue, config = {}) {
  if (install.installed) return
  Vue.component(ZSInputUnderline.name, ZSInputUnderline)
  Vue.component(SameWindow.name, SameWindow)
  Vue.component(FundList.name, FundList)
  Vue.component(RepaymentList.name, RepaymentList)
  Vue.component(ZSInputList.name, ZSInputList)
  Vue.component(NewInputList.name, NewInputList)
};

(typeof window !== 'undefined' && window.Vue) ? install(window.Vue) : ''

export default {
  install,
  ZSInputUnderline,
  SameWindow,
  FundList,
  RepaymentList,
  ZSInputList,
  NewInputList
}
