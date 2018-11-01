// 这里主要是mockjs使用的文件；主要供测试和模拟接口时候使用的
const goods = ['乙二醇', '甲醇', '沥青', '苯乙烯', '甲苯', '精対二甲酸']
const quality = ['优', '良', '次', '原厂质量标准']
const way = ['自提', '配送']
const payWay = ['电汇', '承兑汇票', '不限']
const saleSta = ["N", "A", "D", "T", "R"]
const fundPayWay = ["借入全款", "赊销全款"]
const Mock = require('mockjs')
Mock.mock('http://api.com/roRobot', {
  'data': {
    'totalPages|1-10': 1,
    'totalElements|1-100': 1,
    'content|1-10': [{
      'id|+1': 1001,
      'productName|1': goods,
      'bond|1': 'XXXXX',
      'productPlace': "@city()",
      'productQuality|1': quality,
      'deliveryDate': '@time("yyyy-MM-dd")',
      'deliveryDate2': '@time("yyyy-MM-dd hh:mm")',
      'deliveryPlace': "@city()",
      'deliveryMode|1': way,
      'payMethod|1': payWay,
      'productPrice|0-5000': 0,
      'productName9|0-5000': 0,
      'productName10': 0,
      'productNumber|0-5000': 0,
      'status|1': saleSta,
      'countDownTime': "@time()",
      'finishNumber|1-3': 0,
      'targetNumber|4-7': 0,
      'productName14': "@datetime",
      'countDownTime|60-86400': 60,
      'productSta|1-2': true,
      'quotePrice|1-20': [{
        'price|100-5000': 100
      }]
    }]
  }
})
Mock.mock('http://api.com/fundlog', {
  'data': {
    'totalPages|1-10': 1,
    'totalElements|1-100': 1,
    'content|1-10': [{
      'deliveryDate': '@time("yyyy-MM-dd hh:mm")',
      'day|7-30': 7,
      'typeOfDeal|1': fundPayWay,
      "borrow|0-50000": 1000,
      "loan|0-50000": 1000,
      "orderNum": '2MEG@string("number", 25)',
      "isPayed|1-2": true
    }]
  }
})

Mock.mock('http://api.com/focus', {
  'data': {
    'content|1-6': [{
      'goodsClass': '@cword(2, 6)',
      'goods|1-20': [{
        'goodsName': '@cword(2, 6)',
        'isFocus|1-2': false
      }]
    }]
  }
})

// Mock.mock('http://api.com/manage', {
//   'data': {
//     'content|1-10': [{
//       'contractNo': '@cword(5, 10))',
//       'productName': ''
//
//     }]
//   }
// })
