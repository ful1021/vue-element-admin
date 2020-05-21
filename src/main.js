import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './directive/permission/btnPermissions.js'
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import './components/Globals/index.js' // 全局组件

import api from '@/api'
Vue.prototype.$api = api

import * as tool from '@/utils'
Vue.prototype.$tool = Object.freeze(Object.assign({}, tool))

import biz from '@/bizs/index.js'// 全局业务变量
Vue.prototype.$biz = Vue.observable(biz)// 让 biz 可响应

import mixin from '@/mixins/index.js'// 全局混入
Vue.mixin(mixin)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
