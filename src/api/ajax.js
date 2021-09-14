import axios from "axios";

const instance = axios.create({
  baseURL: '/api',
  timeout: 20000
})

//请求拦截器
instance.interceptors.request.use((config) => {
  return config
})

//响应拦截器
instance.interceptors.response.use((response) => {
  return response.data
},(error) => {
  return new Promise(() => {})
})

export default instance