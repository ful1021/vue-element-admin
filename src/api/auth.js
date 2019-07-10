import Oidc from 'oidc-client'

const host = window.location.origin
const config = {
  userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
  authority: process.env.VUE_APP_BASE_Auth,
  client_id: 'AuthCenter_VueAdmin',
  redirect_uri: host + '/public/callback.html',
  response_type: 'code',
  scope: 'openid profile email AuthCenter',
  post_logout_redirect_uri: host,
  loadUserInfo: true,
  // 静默续订将通过iframe获得新的访问令牌
  // 在旧访问令牌过期之前（60秒之前）
  silent_redirect_uri: host + '/public/silent.html',
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true, // will revoke (reference) access tokens at logout time
  filterProtocolClaims: false // 允许所有OIDC协议声明在窗口中可见
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

export default {
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
            return resolve(false)
          } else {
            return resolve(true)
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
  },

  // Get the profile of the user logged in
  getProfile() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.profile)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Get the token id
  getIdToken() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.id_token)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Get the session state
  getSessionState() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.session_state)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Get the access token of the logged in user
  getAcessToken() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.access_token)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Takes the scopes of the logged in user
  getScopes() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.scopes)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  },

  // Get the user roles logged in
  getRole() {
    const self = this
    return new Promise((resolve, reject) => {
      mgr
        .getUser()
        .then(function(user) {
          if (user == null) {
            self.signIn()
            return resolve(null)
          } else {
            return resolve(user.profile.role)
          }
        })
        .catch(function(err) {
          console.log(err)
          return reject(err)
        })
    })
  }
}
