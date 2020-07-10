// http://healthapiuat.jk724.com/Abp/ServiceProxyScript?type=vue
import request from '@/utils/request'
import { buildQueryString } from '@/utils'

// module 'abp'
const abp = {
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
  }
}

// module 'app'
const app = {
  regionApp: {
    getAllRegion(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/region/getAllRegion',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  userCommentApp: {
    buildCommentsQty(commentTopicType, commentQtyArray, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/userComment/buildCommentsQty' + buildQueryString([{ name: 'commentTopicType', value: commentTopicType }]) + '',
            method: 'POST',
            data: JSON.stringify(commentQtyArray)
          },
          ajaxParams
        )
      )
    },
    buildCommentQty(commentQty, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/userComment/buildCommentQty',
            method: 'POST',
            data: JSON.stringify(commentQty)
          },
          ajaxParams
        )
      )
    }
  },
  userInfoApp: {
    getUserInfoByPhoneNumber(phoneNumber, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/userInfo/getUserInfoByPhoneNumber' + buildQueryString([{ name: 'phoneNumber', value: phoneNumber }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getUserInfoByUserIds(userIds, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/userInfo/getUserInfoByUserIds' + buildQueryString([{ name: 'userIds', value: userIds }]) + '',
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
            url: '/api/app/sample/get',
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
            url: '/api/app/sample/getAuthorized',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  videoApp: {
    searchMedia(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/searchMedia',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    updateVideoStatus(videoId, status, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/updateVideoStatus/' + videoId + '' + buildQueryString([{ name: 'status', value: status }]) + '',
            method: 'PUT'
          },
          ajaxParams
        )
      )
    },
    insertVideo(videoId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/insertVideo/' + videoId + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    createUploadVideo(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/createUploadVideo',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    refreshUploadVideo(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/refreshUploadVideo',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getVideoPlayAuth(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/getVideoPlayAuth' + buildQueryString([{ name: 'videoId', value: input.videoId }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getPlayInfo(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/getPlayInfo' + buildQueryString([{ name: 'videoId', value: input.videoId }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    deleteVideo(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/video/deleteVideo' + buildQueryString([{ name: 'videoIds', value: input.videoIds }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  healthApp: {
    createOrUpdate(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/createOrUpdate',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/delete' + buildQueryString([{ name: 'id', value: input.id }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getList(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/getList',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getHealthManagerServiceItemList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/getHealthManagerServiceItemList' + buildQueryString([{ name: 'healthServiceType', value: input.healthServiceType }, { name: 'healthServiceId', value: input.healthServiceId }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getHealthServiceDetail(healthServiceType, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/getHealthServiceDetail' + buildQueryString([{ name: 'healthServiceType', value: healthServiceType }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitianIds(healthServiceType, qty, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthService/getDietitianIds' + buildQueryString([{ name: 'healthServiceType', value: healthServiceType }, { name: 'qty', value: qty }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  healthServiceCardApp: {
    createOrUpdate(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/createOrUpdate',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/delete' + buildQueryString([{ name: 'id', value: input.id }]) + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getHealthServiceCardPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/getHealthServiceCardPagedResult' + buildQueryString([{ name: 'healthServiceType', value: input.healthServiceType }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getHealthServiceCard(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/getHealthServiceCard' + buildQueryString([{ name: 'id', value: input.id }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    enable(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/enable',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    disable(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/disable',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getHealthServerCardWithCategoryList(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceCard/getHealthServerCardWithCategoryList',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  healthServiceRequestApp: {
    getAllHealthServiceListForDietitian(dietitianId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/getAllHealthServiceListForDietitian/' + dietitianId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    healthServiceRequestSubmitMgmt(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/healthServiceRequestSubmitMgmt',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    healthServiceRequestSubmit(healthServiceType, dietitianId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/healthServiceRequestSubmit/' + dietitianId + '' + buildQueryString([{ name: 'healthServiceType', value: healthServiceType }]) + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getOpenHealthServiceStatus(dietitianId, healthManagerServiceType, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/getOpenHealthServiceStatus/' + dietitianId + '' + buildQueryString([{ name: 'healthManagerServiceType', value: healthManagerServiceType }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getHealthServiceRequestPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/getHealthServiceRequestPagedResult' + buildQueryString([{ name: 'status', value: input.status }, { name: 'healthServiceType', value: input.healthServiceType }, { name: 'startCreationTime', value: input.startCreationTime }, { name: 'endCreationTime', value: input.endCreationTime }, { name: 'startApproveTime', value: input.startApproveTime }, { name: 'endApproveTime', value: input.endApproveTime }, { name: 'filter', value: input.filter }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    approved(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/approved',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    denied(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/healthServiceRequest/denied',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  dietitianAccountApp: {
    getDietitianAccount(userId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianAccount/getDietitianAccount/' + userId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitianAccountPointsChangeWayList(isAddPoints, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianAccount/getDietitianAccountPointsChangeWayList' + buildQueryString([{ name: 'isAddPoints', value: isAddPoints }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getPrivilegesByLevel(level, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianAccount/getPrivilegesByLevel' + buildQueryString([{ name: 'level', value: level }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitianAccountLevels(ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianAccount/getDietitianAccountLevels',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  dietitianApp: {
    getDietitianByUserId(userId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitianByUserId/' + userId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitian(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/' + id + '/getDietitian',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    submitDietitianInfo(input, userId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/submitDietitianInfo/' + userId + '',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getDietitianPublicInfoByDietitianUserId(dietitianUserId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitianPublicInfo/' + dietitianUserId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitianPublicInfoByDietitianId(dietitianId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitianPublicInfo/' + dietitianId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    buildDietitiansWithRelation(currentUserId, dietitians, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/buildDietitiansWithRelation/' + currentUserId + '',
            method: 'POST',
            data: JSON.stringify(dietitians)
          },
          ajaxParams
        )
      )
    },
    getDietitiansWithRelation(currentUserId, input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitiansWithRelation/' + currentUserId + '' + buildQueryString([{ name: 'tagId', value: input.tagId }, { name: 'filter', value: input.filter }, { name: 'searchRelationType', value: input.searchRelationType }, { name: 'searchByUserIds', value: input.searchByUserIds }, { name: 'userIds', value: input.userIds }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitians(input, searchByIds, searchIds, searchByUserIds, searchUserId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitians/' + searchUserId + '' + buildQueryString([{ name: 'tagId', value: input.tagId }, { name: 'filter', value: input.filter }, { name: 'searchRelationType', value: input.searchRelationType }, { name: 'searchByUserIds', value: input.searchByUserIds }, { name: 'userIds', value: input.userIds }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }, { name: 'searchByIds', value: searchByIds }, { name: 'searchIds', value: searchIds }, { name: 'searchByUserIds', value: searchByUserIds }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getDietitianIdByUserId(userId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getDietitianIdByUserId/' + userId + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    isDietitian(userId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/isDietitian/' + userId + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getExclusiveServiceStatus(userId, dietitianId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitian/getExclusiveServiceStatus' + buildQueryString([{ name: 'userId', value: userId }, { name: 'dietitianId', value: dietitianId }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  dietitianMgmtApp: {
    batchUpdateDietitianTags(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianMgmt/batchUpdateDietitianTags',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getDietitianPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianMgmt/getDietitianPagedResult' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'ids', value: input.ids }, { name: 'dietitianTagId', value: input.dietitianTagId }, { name: 'isActive', value: input.isActive }, { name: 'status', value: input.status }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    setApproved(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianMgmt/' + id + '/setApproved',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    setDenied(id, remark, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianMgmt/' + id + '/setDenied' + buildQueryString([{ name: 'remark', value: remark }]) + '',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  dietitianTagApp: {
    getDietitianPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/getDietitianPagedResult' + buildQueryString([{ name: 'filter', value: input.filter }, { name: 'isHot', value: input.isHot }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createOrUpdate(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/createOrUpdate',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    delete(tagId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/delete/' + tagId + '',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    getDietitianTags(isHot, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/getDietitianTags' + buildQueryString([{ name: 'isHot', value: isHot }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    setDietitianTagIsHot(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/' + id + '/setDietitianTagIsHot',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    setDietitianTagNotHot(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/dietitianTag/' + id + '/setDietitianTagNotHot',
            method: 'POST'
          },
          ajaxParams
        )
      )
    }
  },
  customerMgmtApp: {
    tryAddCustomer(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/tryAddCustomer',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    addCustomerAndDietitianRelation(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/addCustomerAndDietitianRelation',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    changeCustomerDietitian(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/changeCustomerDietitian',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    updateServiceTime(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/updateServiceTime',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getServiceRelationRecordList(customerId, dietitianId, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/getServiceRelationRecordList' + buildQueryString([{ name: 'customerId', value: customerId }, { name: 'dietitianId', value: dietitianId }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getCustomerAndDietitianRelationPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/customerMgmt/getCustomerAndDietitianRelationPagedResult' + buildQueryString([{ name: 'userInfo', value: input.userInfo }, { name: 'dietitianInfo', value: input.dietitianInfo }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  courseCategoryApp: {
    getCourseCategoryList(coursePlatformType, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseCategory/getCourseCategoryList' + buildQueryString([{ name: 'coursePlatformType', value: coursePlatformType }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    }
  },
  courseCategoryMgmtApp: {
    getCourseCategoryPagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseCategoryMgmt/getCourseCategoryPagedResult' + buildQueryString([{ name: 'name', value: input.name }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createOrUpdate(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseCategoryMgmt/createOrUpdate',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    }
  },
  courseMgmtApp: {
    createCourse(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/createCourse',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    updateCourse(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/updateCourse',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    enableCourse(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/enableCourse',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    deleteCourse(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/deleteCourse',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    },
    disableCourse(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/disableCourse',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    getCourse(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/getCourse',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getCoursePagedResult(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/getCoursePagedResult' + buildQueryString([{ name: 'title', value: input.title }, { name: 'categoryId', value: input.categoryId }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createOrUpdateCourseLesson(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/createOrUpdateCourseLesson',
            method: 'POST',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    getCourseLessonList(courseId, title, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/getCourseLessonList/' + courseId + '' + buildQueryString([{ name: 'title', value: title }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    getCourseLesson(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/getCourseLesson',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    updateLessonDisplayOrder(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/updateLessonDisplayOrder',
            method: 'PUT',
            data: JSON.stringify(input)
          },
          ajaxParams
        )
      )
    },
    enableLesson(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/enableLesson',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    disableLesson(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/disableLesson',
            method: 'POST'
          },
          ajaxParams
        )
      )
    },
    deleteLesson(id, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/courseMgmt/' + id + '/deleteLesson',
            method: 'DELETE'
          },
          ajaxParams
        )
      )
    }
  },
  lecturerApp: {
    getLecturerList(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/lecturer/getLecturerList' + buildQueryString([{ name: 'courseId', value: input.courseId }, { name: 'lecturerName', value: input.lecturerName }, { name: 'ids', value: input.ids }]) + '',
            method: 'GET'
          },
          ajaxParams
        )
      )
    },
    createOrUpdate(input, ajaxParams) {
      return request(
        Object.assign(
          {
            url: '/api/app/lecturer/createOrUpdate',
            method: 'POST',
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
            url: '/api/app/lecturer/' + id + '/delete',
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
