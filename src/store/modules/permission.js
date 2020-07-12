import { constantRoutes } from '@/router'
import { app } from '@/api/auth'
const _import = require('@/router/_import_' + process.env.NODE_ENV) // 获取组件的方法
import Layout from '@/layout'

export function firstRoute(route, redirect) {
  if (route.children && route.children.length > 0) {
    const firstChild = route.children[0]
    redirect = redirect + '/' + firstChild.path
    firstRoute(firstChild)
  }
  return redirect
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, parentRoute) {
  const res = []
  if (routes.items) {
    routes.items.forEach(item => {
      if (item.url) {
        const tmp = {
          path: item.url,
          name: item.elementId,
          meta: {
            title: item.displayName,
            icon: item.icon
          }
        }
        if (item.customData.layout === true) {
          tmp.component = Layout
        } else if (item.target) {
          tmp.component = _import(item.target)
        }
        if (item.items && item.items.length) {
          tmp.component = Layout
          tmp.children = filterAsyncRoutes(item, tmp)
        }
        res.push(tmp)
      }
    })
  }

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      app.menuApp.get({ baseURL: 'http://localhost:37922' }).then(asyncRoutes => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes)

        // 默认跳转第一个页面
        // const routeRoot = accessedRoutes[0]
        // if (routeRoot) {
        //   const redirect = routeRoot.path
        //   firstRoute(routeRoot, redirect)
        //   console.log(redirect)
        //   accessedRoutes.push({ path: '/', redirect: redirect })
        // }

        accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })

        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
