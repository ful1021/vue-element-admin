// 动态生成by  https://localhost:44376/Abp/ServiceProxyScript?type=vue
import request from '@/utils/request'
import { buildQueryString } from '@/utils'

const abp = {}
const app = {}

abp.abpServiceProxyScriptGetAll = function (model, ajaxParams) {
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
abp.abpLanguagesSwitch = function (culture, uiCulture, returnUrl, ajaxParams) {
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
abp.abpApplicationConfigurationScriptGet = function (ajaxParams) {
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

app.sampleGet = function (ajaxParams) {
  return request(
    Object.assign(
      {
        url: '/api/TagCenter/sample',
        method: 'GET'
      },
      ajaxParams
    )
  )
}
app.sampleGetAuthorized = function (ajaxParams) {
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
app.abpApplicationConfigurationGet = function (ajaxParams) {
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
app.abpApiDefinitionGet = function (model, ajaxParams) {
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
app.abpTenantFindTenantByName = function (name, ajaxParams) {
  return request(
    Object.assign(
      {
        url: '/api/abp/multi-tenancy/tenants/by-name/' + name + '',
        method: 'GET'
      },
      ajaxParams
    )
  )
}
app.abpTenantFindTenantById = function (id, ajaxParams) {
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

export {
  abp,
  app
}
