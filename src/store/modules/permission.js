import { constantRoutes } from '@/router'
import Layout from '@/layout'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

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
  generateRoutes({ commit }, data) {
    return new Promise(resolve => {
      const accessedRoutes = convertRouter(data)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export const componentsMap = {
  'System.Roles': () => import('@/views/system/roles'),
  'System.Users': () => import('@/views/system/users'),
  'System.ExtendColumns': () => import('@/views/system/extend-columns')
}

function convertRouter(asyncRouterMap) {
  const accessedRouters = []
  const routerData = asyncRouterMap.MainMenu.items
  if (routerData) {
    routerData.forEach(item => {
      const router = generateRouter(item, true)
      if (router) {
        accessedRouters.push(router)
      }
    })
  }
  accessedRouters.push({ path: '*', redirect: '/404', hidden: true })
  return accessedRouters
}

function generateRouter(item, isParent) {
  const children = []
  if (item.items && item.items.length > 0) {
    item.items.forEach(item => {
      // 如果没有配置 映射，则不添加路由
      const component = componentsMap[item.name]
      if (component) {
        const router = generateRouter(item, false)
        if (router) {
          children.push(router)
        }
      }
    })
  }
  // 如果根路由，但是没有子项，则不添加此路由
  if ((isParent && children.length === 0) || !item.url) {
    return null
  }
  const route = {
    path: item.url,
    name: item.name,
    meta: {
      title: item.displayName,
      icon: item.icon,
      grantedPermissions: item.customData.grantedPermissions
    },
    component: isParent ? Layout : componentsMap[item.name]
  }
  if (children.length > 0) {
    route.children = children
  }
  return route
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
