import request from '@/utils/request'
import abp from '@/utils/abp'
import { extend } from '@/utils'

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
              abp.utils.buildQueryString([
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
              abp.utils.buildQueryString([
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
    deleteTest(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/DeleteTest',
            method: 'DELETE',
            params: input
          },
          ajaxParams
        )
      )
    },
    getUsersToExcel(input, ajaxParams) {
      return request(
        extend(
          true,
          {
            url: '/api/services/app/User/GetUsersToExcel',
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'DELETE',
            params: input
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
            method: 'GET'
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET'
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
            method: 'GET',
            params: input
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
            method: 'DELETE',
            params: input
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
            method: 'GET'
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'DELETE',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'DELETE',
            params: input
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
              abp.utils.buildQueryString([
                { name: 'regKeys', value: regKeys }
              ]) +
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'DELETE',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'GET',
            params: input
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
            method: 'PUT',
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
            method: 'DELETE',
            params: input
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
