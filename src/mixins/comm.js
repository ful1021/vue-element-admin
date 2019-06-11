import { app } from '@/api/api'
export default {
  guidEmpty: '00000000-0000-0000-0000-000000000000',

  boolList: [
    {
      text: '是',
      value: 'true'
    },
    {
      text: '否',
      value: 'false'
    }
  ],

  roleList: [],
  // 初始化角色
  async initRoles(paramData) {
    // const param = paramData || {}
    // const result = await app.user.getRoles(param)
    const result = await app.role.getAll({
      skipCount: 0,
      maxResultCount: 100
    })
    this.roleList = result.items
  },

  // 批量获取枚举下拉数据
  async initEnum(name) {
    const result = await app.enums.batchGetEnumList(name)
    for (const k in result) {
      const key = k + 'List'
      this[key] = result[k]
    }
  },

  rootUrl: window.location.href.split('#')[0],
  openPage(path) {
    window.open(`${this.rootUrl}#${path}`)
  }

  // openFile(url) {
  //   window.open(config.resourecePath + url, 'file')
  // }
}
