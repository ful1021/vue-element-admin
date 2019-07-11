// import Cookies from 'js-cookie'
import Oidc from 'oidc-client'

// const TokenKey = 'Admin-Token'

const host = window.location.origin
const config = {
  userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
  authority: process.env.VUE_APP_BASE_Auth,
  client_id: 'AuthCenter_VueOidc',
  redirect_uri: host + '/static/callback.html',
  response_type: 'code',
  scope: 'openid profile email AuthCenter',
  post_logout_redirect_uri: host,
  loadUserInfo: true,
  // 静默续订将通过iframe获得新的访问令牌
  // 在旧访问令牌过期之前（60秒之前）
  silent_redirect_uri: host + '/static/silent-renew.html',
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true, // will revoke (reference) access tokens at logout time
  filterProtocolClaims: true // 允许所有OIDC协议声明在窗口中可见
}
Oidc.Log.logger = console
Oidc.Log.level = Oidc.Log.INFO

const mgr = new Oidc.UserManager(config)

mgr.events.addUserLoaded(function(user) {
  console.log('New User Loaded：', arguments)
  console.log('Acess_token: ', user.access_token)
})

mgr.events.addAccessTokenExpiring(function() {
  console.log('AccessToken Expiring：', arguments)
})

mgr.events.addAccessTokenExpired(function() {
  console.log('AccessToken Expired：', arguments)
  alert('Session expired. Going out!')
  mgr
    .signoutRedirect()
    .then(function(resp) {
      console.log('signed out', resp)
    })
    .catch(function(err) {
      console.log(err)
    })
})

mgr.events.addSilentRenewError(function() {
  console.error('Silent Renew Error：', arguments)
})

mgr.events.addUserSignedOut(function() {
  alert('Going out!')
  console.log('UserSignedOut：', arguments)
  mgr
    .signoutRedirect()
    .then(function(resp) {
      console.log('signed out', resp)
    })
    .catch(function(err) {
      console.log(err)
    })
})

const mgrAction = {
  // Renew the token manually
  renewToken() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .signinSilent()
        .then(function(user) {
          if (user == null) {
            self.signIn(null)
          } else {
            return resolve(user)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Get the user who is logged in
  getUser() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Check if there is any user logged in
  getSignedIn() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve({
              isSignId: false,
              user: {}
            })
          } else {
            return resolve({
              isSignId: true,
              user: user
            })
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Redirect of the current window to the authorization endpoint.
  signIn() {
    mgr.signinRedirect().catch(function(err) {
      console.log(err)
    })
  },

  // Redirect of the current window to the end session endpoint
  signOut() {
    mgr
      .signoutRedirect()
      .then(function(resp) {
        console.log('signed out', resp)
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}

export function getToken() {
  // return Cookies.get(TokenKey)
  // mgr.getUser().then(user => {
  //   return user
  // })
  // console.log(user)
  // if (user) {
  //   return user.access_token
  // }
  return null
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  mgrAction.signOut()
}

export default mgrAction
