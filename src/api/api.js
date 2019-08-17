// 动态生成by  /AbpServiceProxies/GetAll?type=vue
import request from '@/utils/request'
import { extend, buildQueryString } from '@/utils'

// module 'app'
const app = {
  tokenAuth: {
    authenticate(model, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/TokenAuth/Authenticate',
            method: 'POST',
            data: model
          },
          ajaxParams
        )
      )
    },
    logOut(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/TokenAuth/LogOut',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    impersonatedAuthenticate(impersonationToken, ajaxParams) {
      return request(
        extend(
          true,
          {
            url:
              '/api/TokenAuth/ImpersonatedAuthenticate' +
              buildQueryString([
                { name: 'impersonationToken', value: impersonationToken }
              ]) +
              '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    linkedAccountAuthenticate(switchAccountToken, ajaxParams) {
      return request(
        extend(
          true,
          {
            url:
              '/api/TokenAuth/LinkedAccountAuthenticate' +
              buildQueryString([
                { name: 'switchAccountToken', value: switchAccountToken }
              ]) +
              '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getExternalAuthenticationProviders(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/TokenAuth/GetExternalAuthenticationProviders',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  user: {
    getUsersToExcel(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/GetUsersToExcel',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    unlockUser(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/UnlockUser',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getRoles(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/GetRoles',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    changeLanguage(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/ChangeLanguage',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    changePassword(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/ChangePassword',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    resetPassword(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/ResetPassword',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllList(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/GetAllList',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  session: {
    getCurrentLoginInformations(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Session/GetCurrentLoginInformations',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getMenus(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Session/GetMenusAsync',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getMenu(menuName, ajaxParams) {
      return request(
        extend(
          true,
          {
            url:
              '/api/services/app/Session/GetMenuAsync' +
              buildQueryString([{ name: 'menuName', value: menuName }]) +
              '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  role: {
    getRoles(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/GetRolesAsync',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllPermissions(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/GetAllPermissions',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getRoleForEdit(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/GetRoleForEdit',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    createOrUpdateRole(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/CreateOrUpdateRole',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllList(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/GetAllList',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Role/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  tenant: {
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Tenant/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Tenant/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Tenant/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Tenant/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Tenant/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  extendColumn: {
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllList(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/GetAllList',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/ExtendColumn/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  enums: {
    batchGetEnumList(regKeys, ajaxParams) {
      return request(
        extend(
          true,
          {
            url:
              '/api/services/app/Enums/BatchGetEnumList' +
              buildQueryString([{ name: 'regKeys', value: regKeys }]) +
              '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  dataDictionary: {
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllList(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/GetAllList',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/DataDictionary/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  configuration: {
    changeUiTheme(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Configuration/ChangeUiTheme',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  bizLog: {
    getAll(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/GetAll',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    getAllList(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/GetAllList',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/Get',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/Create',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/Update',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/BizLog/Delete',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  },
  account: {
    isTenantAvailable(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Account/IsTenantAvailable',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    register(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Account/Register',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    impersonate(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Account/Impersonate',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    },
    backToImpersonator(ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Account/BackToImpersonator',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    switchToLinkedAccount(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/Account/SwitchToLinkedAccount',
            method: 'POST',
            data: input
          },
          ajaxParams
        )
      )
    }
  }
}

export { app }
