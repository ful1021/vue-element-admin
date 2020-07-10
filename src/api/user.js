import request from '@/utils/request'
import qs from 'querystring'

export function login(username, password) {
  const data = {
    client_id: 'AuthCenter_ConsoleTestApp',
    client_secret: '1q2w3e*',
    grant_type: 'password',
    // scope: 'TagCenter',
    username: username,
    password: password
  }

  return request(Object.assign({
    url: '/connect/token',
    method: 'post',
    data: qs.stringify(data)
  }, {
    baseURL: process.env.VUE_APP_BASE_Auth,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }))
}

export function getInfo(token) {
  return request(Object.assign({
    url: '/connect/userinfo',
    method: 'get'
  }, {
    baseURL: process.env.VUE_APP_BASE_Auth
  }))
}
function test() {

}
export function logout() {
  return test()
  // return request(Object.assign({
  //   url: '/connect/endsession',
  //   method: 'post'
  // }, {
  //   baseURL: process.env.VUE_APP_BASE_Auth
  // }))
}
