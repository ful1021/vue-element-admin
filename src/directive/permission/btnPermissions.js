import Vue from 'vue'

Vue.directive('has', {
  inserted: function(el, binding, vnode) {
    const route = vnode.context.$route
    let permissionValue = binding.arg || binding.value
    if (permissionValue) {
      if (permissionValue.indexOf('.') < 0) {
        permissionValue = route.name + '.' + permissionValue
      }
    }
    // console.log(permissionValue)
    const permissions = route.meta.grantedPermissions
    // console.log(permissions)
    if (permissions[permissionValue] !== undefined) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      } else {
        el.style.display = 'none'
      }
    }
  }
})
