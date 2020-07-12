import { constantRoutes } from '@/router'
import { app } from '@/api/auth'
import Layout from '@/layout'

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  // routes.forEach(route => {
  //   const tmp = { ...route }
  //   if (hasPermission(roles, tmp)) {
  //     if (tmp.children) {
  //       tmp.children = filterAsyncRoutes(tmp.children, roles)
  //     }
  //     res.push(tmp)
  //   }
  // })

  routes.forEach(item => {
    if (item.url) {
      const tmp = {
        path: item.url,
        name: item.elementId,
        meta: {
          title: item.displayName,
          icon: item.icon
        }
      }
      if (item.url === 'Layout') { // 针对不在 Views 目录下面的组件，特殊处理
        item.component = Layout
      } else {
        item.component = loadView(item.url)
      }
      if (item.items && item.items.length) {
        item.children = filterAsyncRoutes(item.items)
      }
      res.push(tmp)
    }
  })

  return res
}

export const loadView = (view) => {
  return (resolve) => require([`@/views/${view}`], resolve)
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
      app.menuApp.get({ baseUrl: 'http://localhost:5000' }).then(asyncRoutes => {
        const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
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
