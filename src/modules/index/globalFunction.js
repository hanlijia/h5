import Vue from 'vue'
// 接口
Vue.prototype.$axiosRequest = function (getData, params, setData) {
  this.$store.dispatch(getData, params).then(data => {
    (data != null && data.code === 200) ? this.$store.commit(setData, data.data) : ''
  })
}
// 过滤脚本
Vue.prototype.$filterScript = function (str) {
  return str.replace(/<.*>|createElement|script/ig, '')
}
// 可视窗口高度
Vue.prototype.$boxHeight = function (otherBoxHeight) {
  return `min-height: ${window.innerHeight - otherBoxHeight}px`
}
// 日期转换
Date.prototype.$format = function(fmt) {
  let o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr(("" + o[k]).length)))
    }
  }
  return fmt
}
Vue.prototype.$hourMin = function (sec) {
  let hour = Math.floor(sec / 3600)
  let minuter = Math.floor(sec / 60 - hour * 60)
  return (hour < 10 ? '0' + hour : hour) + "时" + (minuter < 10 ? '0' + minuter : minuter) + "分"
}
// 秒数时间化
// 倒计时 params 秒
Vue.prototype.$countDown = function (sec) {
  if (!sec) {
    this.countDown = " "
    return
  }
  let hour = Math.floor(sec / 3600)
  let minuter = Math.floor(sec / 60 - hour * 60)
  let second = sec - (hour * 3600 + minuter * 60)
  this.setIntervalNum = setInterval(() => {
    second--
    if (second < 0) {
      minuter -= 1
      second = 59
    }
    if (minuter < 0) {
      hour -= 1
      minuter = 59
    }
    if (hour < 0) {
      hour = 0
      minuter = 0
      second = 0
      clearInterval(this.setIntervalNum)
      this.countDown = "已失效"
      return
    }
    this.countDown = (hour < 10 ? '0' + hour : hour) + ":" + (minuter < 10 ? '0' + minuter : minuter) + ":" + (second < 10 ? '0' + second : second)
  }, 1000)
}
// 取正
Vue.prototype.$positiveNumber = function (obj, str, index) {
  if (index == null) {
    let val = obj[str]
    obj[str] = val < 0 ? -val : val
  } else {
    let val = obj[index][str]
    obj[index][str] = val < 0 ? -val : val
  }
}
// 操作后弹窗提示 params data 请求后的返回数据 succStr failStr 成功失败文字
Vue.prototype.$popupTips = function (failStr, data, succStr) {
  if (data != null && data.code === 200) {
    this.relIsS = true
    this.relCon = succStr
  } else {
    this.relIsS = false
    this.relCon = failStr
  }
  this.relShow = true
  setTimeout(() => {
    this.relShow = false
  }, 1500)
}
// 时间补0
Vue.prototype.$twoBits = function (time) {
  let timeArr = time
  typeof time === "string" ? timeArr = time.split(":") : ''
  return `${timeArr[0].toString().padStart(2, '0')}:${timeArr[1].toString().padStart(2, '0')}`
}
