import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 1000 * 10
})

instance.interceptors.request.use(config => {
  return config
}, error => {})

instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
}, error => {
  return Promise.reject(error.response.data)
})
export default instance;