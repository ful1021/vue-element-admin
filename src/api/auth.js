// 动态生成by  https://localhost:44345/Abp/ServiceProxyScript?type=vue
import request from '@/utils/request'
import { buildQueryString } from '@/utils'

// module 'abp'
const abp = {
  abpServiceProxyScriptApp: {
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
  abpLanguagesApp: {
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
  abpApplicationConfigurationScriptApp: {
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
  menuApp: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/menu',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  abpApplicationConfigurationApp: {
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
  abpApiDefinitionApp: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/abp/api-definition',
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
  permissionApp: {
    getDefinitions(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/permission/definitions',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    get(providerName, providerKey, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/permission' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
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
            url: '/api/app/permission' + buildQueryString([{ name: 'providerName', value: providerName }, { name: 'providerKey', value: providerKey }]) + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  identityRoleApp: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityRole/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getList(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityRole',
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
            url: '/api/app/identityRole',
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
            url: '/api/app/identityRole/' + id + '',
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
            url: '/api/app/identityRole/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  identityUserApp: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUser/' + id + '',
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
            url: '/api/app/identityUser' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getRoles(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUser/' + id + '/roles',
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
            url: '/api/app/identityUser',
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
            url: '/api/app/identityUser/' + id + '',
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
            url: '/api/app/identityUser/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    updateRoles(id, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUser/' + id + '/roles',
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
            url: '/api/app/identityUser/findByUsername' + buildQueryString([{ name: 'username', value: username }]) + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    findByEmail(email, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUser/findByEmail' + buildQueryString([{ name: 'email', value: email }]) + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  identityUserLookupApp: {
    findById(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUserLookup/' + id + '/findById',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    findByUserName(userName, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityUserLookup/findByUserName' + buildQueryString([{ name: 'userName', value: userName }]) + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  profileApp: {
    get(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/profile',
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
            url: '/api/app/profile',
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
            url: '/api/app/profile/changePassword',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  identityClaimTypeApp: {
    getList(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityClaimType',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getListPaged(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityClaimType/paged' + buildQueryString([{ name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  apiResourceApp: {
    getList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource' + buildQueryString([{ name: 'name', value: input.name }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
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
            url: '/api/app/apiResource/' + id + '',
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
            url: '/api/app/apiResource',
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
            url: '/api/app/apiResource/' + id + '',
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
            url: '/api/app/apiResource/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getSecrets(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/secrets',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createSecret(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/secret',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    deleteSecret(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/secret' + buildQueryString([{ name: 'apiResourceId', value: input.apiResourceId }, { name: 'type', value: input.type }, { name: 'value', value: input.value }, { name: 'description', value: input.description }, { name: 'expiration', value: input.expiration }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteSecrets(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/secrets',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getScopes(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/scopes',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createScope(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/scope',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    deleteScope(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/scope' + buildQueryString([{ name: 'apiResourceId', value: input.apiResourceId }, { name: 'name', value: input.name }, { name: 'displayName', value: input.displayName }, { name: 'description', value: input.description }, { name: 'required', value: input.required }, { name: 'emphasize', value: input.emphasize }, { name: 'showInDiscoveryDocument', value: input.showInDiscoveryDocument }, { name: 'userClaims', value: input.userClaims }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteScopes(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/scopes',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getUserClaims(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/userClaims',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createUserClaims(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/userClaims',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    deleteUserClaim(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/userClaim' + buildQueryString([{ name: 'apiResourceId', value: input.apiResourceId }, { name: 'type', value: input.type }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteUserClaims(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/apiResource/' + id + '/userClaims',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  clientApp: {
    getList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
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
            url: '/api/app/client/' + id + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getByClientId(clientId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/byClientId/' + clientId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createSpaClient(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/spaClient',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    create(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createScope(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/scope',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createSecret(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/secret',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createCorsOrigin(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/corsOrigin',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createGrantType(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/grantType',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createClaim(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/claim',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createIdPRestriction(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/idPRestriction',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createPostLogoutRedirectUri(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/postLogoutRedirectUri',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createProperty(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/property',
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
            url: '/api/app/client/' + id + '',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(clientId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client' + buildQueryString([{ name: 'clientId', value: clientId }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteScope(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/scope' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'scope', value: input.scope }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteSecret(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/secret' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'type', value: input.type }, { name: 'value', value: input.value }, { name: 'description', value: input.description }, { name: 'expiration', value: input.expiration }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteCorsOrigin(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/corsOrigin' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'origin', value: input.origin }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteGrantType(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/grantType' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'grantType', value: input.grantType }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteClaim(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/claim' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'type', value: input.type }, { name: 'value', value: input.value }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteProperty(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/property' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'key', value: input.key }, { name: 'value', value: input.value }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteIdPRestriction(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/idPRestriction' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'provider', value: input.provider }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deletePostLogoutRedirectsUri(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/postLogoutRedirectsUri' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'postLogoutRedirectUri', value: input.postLogoutRedirectUri }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteScopes(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/scopes',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteCorsOrigins(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/corsOrigins',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteGrantTypes(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/grantTypes',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteClaims(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/claims',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteProperties(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/properties',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteIdPRestrictions(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/idPRestrictions',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deletePostLogoutRedirectUri(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/postLogoutRedirectUri',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    createRedirectUri(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/redirectUri',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    deleteRedirectUriAsyncByInput(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/redirectUri' + buildQueryString([{ name: 'clientId', value: input.clientId }, { name: 'redirectUri', value: input.redirectUri }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteRedirectUriAsyncById(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/client/' + id + '/redirectUri',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  identityResourceApp: {
    get(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityResource/' + id + '',
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
            url: '/api/app/identityResource' + buildQueryString([{ name: 'name', value: input.name }, { name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
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
            url: '/api/app/identityResource',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    createUserClaim(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityResource/userClaim',
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
            url: '/api/app/identityResource/' + id + '',
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
            url: '/api/app/identityResource/' + id + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteUserClaim(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityResource/userClaim' + buildQueryString([{ name: 'identityResourceId', value: input.identityResourceId }, { name: 'type', value: input.type }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    deleteUserClaims(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/identityResource/' + id + '/userClaims',
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
