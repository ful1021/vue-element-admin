// 动态生成by  https://localhost:44376/Abp/ServiceProxyScript?type=vue
import request from '@/utils/request'
import { buildQueryString } from '@/utils'

// module 'abp'
const abp = {
  abpServiceProxyScript: {
    getAll(model, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/Abp/ServiceProxyScript' + buildQueryString([{ name: 'type', value: model.type }, { name: 'useCache', value: model.useCache }, { name: 'modules', value: model.modules }, { name: 'controllers', value: model.controllers }, { name: 'actions', value: model.actions }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  abpLanguages: {
    switch(culture, uiCulture, returnUrl, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/Abp/Languages/Switch' + buildQueryString([{ name: 'culture', value: culture }, { name: 'uiCulture', value: uiCulture }, { name: 'returnUrl', value: returnUrl }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  abpApplicationConfigurationScript: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/Abp/ApplicationConfigurationScript',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  }
}

// module 'app'
const app = {
  sample: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/TagCenter/sample',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getAuthorized(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/TagCenter/sample/authorized',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  sampleApp: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/sample',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getAuthorized(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/sample/authorized',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
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
  bookApp: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/book/' + id + '',
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
            url: '/api/app/book' + buildQueryString([{ name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
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
            url: '/api/app/book',
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
            url: '/api/app/book/' + id + '',
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
            url: '/api/app/book/' + id + '',
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
  app
}
