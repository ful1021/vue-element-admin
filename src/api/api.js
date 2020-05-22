// 动态生成by  https://localhost:44345/Abp/ServiceProxyScript?type=vue
import request from '@/utils/request'
import { buildQueryString } from '@/utils'

// module 'abp'
const abp = {
  abpApplicationConfiguration: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/application-configuration',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  abpApiDefinition: {
    get(model, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/api-definition' + buildQueryString([{ name: 'includeTypes', value: model.includeTypes }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  abpTenant: {
    findTenantByName(name, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/multi-tenancy/tenants/by-name/' + name + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    findTenantById(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/multi-tenancy/tenants/by-id/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  features: {
    get(providerName, providerKey, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/features' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    update(providerName, providerKey, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/features' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  permissions: {
    get(providerName, providerKey, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/permissions' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    update(providerName, providerKey, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/permissions' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  }
}

// module 'account'
const account = {
  account: {
    register(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/account/register',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  }
}

// module 'identity'
const identity = {
  identityRole: {
    getAllList(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles/all',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles' + buildQueryString([{ name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    update(id, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles/' + id + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/roles/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  identityUser: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    update(id, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/' + id + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getRoles(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/' + id + '/roles',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    updateRoles(id, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/' + id + '/roles',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    findByUsername(username, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/by-username/{userName}',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    findByEmail(email, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/by-email/' + email + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  identityUserLookup: {
    findById(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/lookup/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    findByUserName(userName, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/lookup/by-username/' + userName + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    search(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/lookup/search' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getCount(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/users/lookup/count' + buildQueryString([{ name: 'filter', value: input.filter }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  profile: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/my-profile',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    update(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/my-profile',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    changePassword(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/identity/my-profile/change-password',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  }
}

// module 'multi_tenancy'
const multi_tenancy = {
  tenant: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    update(id, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getDefaultConnectionString(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '/default-connection-string',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    updateDefaultConnectionString(id, defaultConnectionString, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '/default-connection-string' + buildQueryString([{ name: 'defaultConnectionString', value: defaultConnectionString }]) + '',
            method: 'PUT'
          },
          ajaxParams
        )
      )
    },
    deleteDefaultConnectionString(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/multi-tenancy/tenants/' + id + '/default-connection-string',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  }
}

export {
  abp,
  account,
  identity,
  multi_tenancy
}
