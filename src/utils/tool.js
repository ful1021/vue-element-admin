export default {
  getResourcePath(url) {
    return this.getUrl(process.env.ResourcePath, url)
  },
  getUrl(url, base) {
    if (url === undefined) {
      return url
    }
    if (url && (url.match(/http:\/\//) || url.match(/https:\/\//))) {
      return url
    }

    // 全站统一配置
    let barUrl = base
    if (!barUrl.endsWith('/')) {
      barUrl += '/'
    }
    if (url.startsWith('/')) {
      return barUrl + url.slice(1)
    } else {
      return barUrl + url
    }
  }
}
