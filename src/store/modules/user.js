import tool from '@/utils'
import { app } from '@/api/api'
const login = app.tokenAuth.authenticate
const getInfo = app.session.getCurrentLoginInformations
const logout = app.tokenAuth.logOut

import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  session: {},
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_SESSION: (state, session) => {
    state.session = session
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
function setBearerToken(commit, response) {
  const token = response.accessToken
  commit('SET_TOKEN', token)
  setToken(token)
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ userNameOrEmailAddress: username.trim(), password: password })
        .then(response => {
          setBearerToken(commit, response)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  impersonate({ commit, dispatch }, userId) {
    return new Promise(async(resolve, reject) => {
      const input = {
        userId: userId,
        tenantId: state.session.tenantId
      }
      const impersonateResult = await app.account.impersonate(input)
      await dispatch('logout')
      app.tokenAuth
        .impersonatedAuthenticate(impersonateResult.impersonationToken)
        .then(response => {
          setBearerToken(commit, response)
          tool.reloadPage()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  backToImpersonator({ commit, dispatch }) {
    return new Promise(async(resolve, reject) => {
      const impersonateResult = await app.account.backToImpersonator()
      await dispatch('logout')
      app.tokenAuth
        .impersonatedAuthenticate(impersonateResult.impersonationToken)
        .then(response => {
          setBearerToken(commit, response)
          tool.reloadPage()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      Promise.all([app.session.getMenus(), getInfo(state.token)])
        .then(values => {
          const menus = values[0]
          const data = values[1]
          // const { data } = response

          if (!data) {
            reject('Verification failed, please Login again.')
          }

          const { roles, name, avatar, introduction, session } = data

          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!')
          }

          commit('SET_ROLES', roles)
          commit('SET_NAME', name)
          commit('SET_AVATAR', avatar)
          commit('SET_INTRODUCTION', introduction)
          commit('SET_SESSION', session)

          resolve(menus)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resetRouter()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
