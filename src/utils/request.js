// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token进行头部携带
// 3.响应拦截器： 1.剥离无效数据 2.处理token失效
// 4.导出函数，调用当前的axsio发请求，返回promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(() => {

}, error => {
  if (error.response && error.response.status === 401) {
    // 1.清空本地无效用户信息 2. 跳转到登录页面 3.跳转需要传参(当前地址)给登录页面
    store.commit('user/SER_USER', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(error)
})

// 请求工具函数
export default (url, method, submitDate) => {
  return instance({
    url,
    method,
    // []是动态的key 表达式
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitDate
  })
}
