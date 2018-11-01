import axios from 'axios'
const URL = process.env.HOST

// 重新封装请求
const $ajax = axios.create({
  baseURL: URL,
  method: 'post',
  responseType: 'json',
  config: {
    "Content-Type": 'application/json;charset=UTF-8'
  }
})

// 超时设置 默认3秒
// $ajax.defaults.timeout = 3000

// 添加响应拦截器
$ajax.interceptors.response.use(response => {
  return ajaxInfo(response)
}, () => {
  // window.location.href = "/errPage.html#/errRequest"
})

// 成功后拦截info
// 根据需求来
function ajaxInfo (res) {
  let datas = res.data
  let info = datas.info
  if (!info) return datas
}

export default $ajax
