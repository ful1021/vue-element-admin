import Vue from 'vue'
import abp from '@/utils/abp'

Vue.directive('has', {
  inserted: function(el, binding, vnode) {
    const route = vnode.context.$route
    let permissionValue = binding.arg || binding.value
    if (permissionValue) {
      permissionValue = route.name + '.' + permissionValue
    }
    // console.log(permissionValue)
    // const btnPermissionsArr = route.meta.btnPermissions
    // console.log(btnPermissionsArr)
    if (!abp.auth.isGranted(permissionValue)) {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      } else {
        el.style.display = 'none'
      }
    }
  }
})
