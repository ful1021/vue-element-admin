// import { abp, app } from './api'
import * as pay from './pay-system'
import * as health from './health'

// // const api = Object.assign(app, abp)
// const api = Object.assign({ abp }, { app })

const auth = {
  getMenus() {
    return '{"MainMenu":{"name":"MainMenu","displayName":"Main menu","customData":null,"items":[{"name":"Dashboard","icon":null,"displayName":"首页","order":0,"url":"dashboard","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"Roles","icon":null,"displayName":"角色管理","order":0,"url":"roles","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"Users","icon":null,"displayName":"员工管理","order":0,"url":"users","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"AuthManager","icon":null,"displayName":"授权管理","order":0,"url":"authManager","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"GrantAuth","icon":null,"displayName":"授权标记","order":0,"url":"grantAuth","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"ArchivesManager","icon":null,"displayName":"证书管理","order":0,"url":"archives","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"MyArchives","icon":null,"displayName":"我的证书","order":0,"url":"my-archives","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"UploadArc","icon":null,"displayName":"上传证书","order":0,"url":"upload-arc","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"System","icon":null,"displayName":"系统设置","order":0,"url":"system","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[{"name":"System.DictData","icon":null,"displayName":"字典维护","order":0,"url":"/dict-data","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"System.AuthorizationTree","icon":null,"displayName":"授权字典","order":0,"url":"/authorizationTree","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"System.Notice","icon":null,"displayName":"公告管理","order":0,"url":"/notice","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]},{"name":"System.Settings","icon":null,"displayName":"系统设置","order":0,"url":"/settings","customData":null,"target":null,"isEnabled":true,"isVisible":true,"items":[]}]}]}}'
  }
}

export default {
  auth,
  pay,
  health
}
