import request from '@/utils/request'
import abp from '@/utils/abp'
// const clonedeep = require('lodash.clonedeep')
import { clonedeep } from '@/utils'

// module 'app'
const app = {
  tokenAuth: {
    authenticate(model, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/TokenAuth/Authenticate',
            method: 'POST',
            data: JSON.stringify(model)
          },
          ajaxParams
        )
      )
    },
    getExternalAuthenticationProviders(ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/TokenAuth/GetExternalAuthenticationProviders',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    externalAuthenticate(model, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/TokenAuth/ExternalAuthenticate',
            method: 'POST',
            data: JSON.stringify(model)
          },
          ajaxParams
        )
      )
    },
    logOut(ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/TokenAuth/LogOut',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  user: {
    create(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/User/Create',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/User/Update',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/User/Delete' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getRoles(ajaxParams) {
      return request(
        clonedeep(
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
        clonedeep(
          {
            url: '/api/services/app/User/ChangeLanguage',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    changePassword(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/User/ChangePassword',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    resetPassword(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/User/ResetPassword',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/User/Get' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/User/GetAll' +
              abp.utils.buildQueryString([
                { name: 'keyword', value: input.keyword },
                { name: 'isActive', value: input.isActive },
                { name: 'skipCount', value: input.skipCount },
                { name: 'maxResultCount', value: input.maxResultCount }
              ]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  session: {
    getCurrentLoginInformations(ajaxParams) {
      return request(
        clonedeep(
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
    create(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Role/Create',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getRoles(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Role/GetRolesAsync' +
              abp.utils.buildQueryString([
                { name: 'permission', value: input.permission }
              ]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Role/Update',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Role/Delete' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getAllPermissions(ajaxParams) {
      return request(
        clonedeep(
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
        clonedeep(
          {
            url:
              '/api/services/app/Role/GetRoleForEdit' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Role/Get' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Role/GetAll' +
              abp.utils.buildQueryString([
                { name: 'keyword', value: input.keyword },
                { name: 'skipCount', value: input.skipCount },
                { name: 'maxResultCount', value: input.maxResultCount }
              ]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  tenant: {
    create(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Tenant/Create',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Tenant/Delete' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    get(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Tenant/Get' +
              abp.utils.buildQueryString([{ name: 'id', value: input.id }]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getAll(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url:
              '/api/services/app/Tenant/GetAll' +
              abp.utils.buildQueryString([
                { name: 'keyword', value: input.keyword },
                { name: 'isActive', value: input.isActive },
                { name: 'skipCount', value: input.skipCount },
                { name: 'maxResultCount', value: input.maxResultCount }
              ]) +
              '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Tenant/Update',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  configuration: {
    changeUiTheme(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Configuration/ChangeUiTheme',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  account: {
    isTenantAvailable(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Account/IsTenantAvailable',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    register(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Account/Register',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    impersonate(input, ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Account/Impersonate',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    backToImpersonator(ajaxParams) {
      return request(
        clonedeep(
          {
            url: '/api/services/app/Account/BackToImpersonator',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  }
}

export { app }
