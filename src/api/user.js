import request from '@/utils/request'
import axios from 'axios'
import qs from 'querystring'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_Auth,
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)

export function login(username, password) {
  const data = {
    client_id: 'TagCenter_Vue',
    client_secret: '1q2w3e*',
    grant_type: 'password',
    scope: 'TagCenter',
    username: username,
    password: password
  }

  return service({
    url: '/connect/token',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
