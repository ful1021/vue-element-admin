<template>
  <el-table-column
    :prop="prop"
    :sortable="sortable"
    class-name="status-col"
    :header-align="headerAlign"
    :align="align"
    :width="width"
    v-bind="$attrs"
  >
    <template #default="scope">
      <el-tag
        v-if="types!=null"
        :type="handleTagType(scope.row)"
        :effect="effect"
      >{{ handleVal(scope.row) }}</el-tag>
      <span v-else>{{ handleVal(scope.row) }}</span>
    </template>
  </el-table-column>
</template>

<script>
import mixins from './mixins'
export default {
  mixins: [mixins],
  props: {
    width: {
      type: String,
      default: '160px'
    },
    effect: {
      type: String,
      default: 'dark'
    },
    types: {
      type: Object,
      default: null
    },
    filter: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleTagType(row) {
      if (this.types != null) {
        const val = row[this.prop]
        const type = this.tagType(val, this.types)
        return type
      }
      return ''
    },
    handleVal(row) {
      const val = row[this.prop]
      if (this.filter && this.filter.length > 0) {
        return this.showValue(val, this.filter)
      }
      return val
    },
    showValue(data, arrs, props = { value: 'value', name: 'name' }) {
      if (!arrs) {
        return data
      }
      const valuearr = arrs.find(a => a.value === data)
      if (valuearr) {
        return valuearr[props.name]
      }
      return data
    },
    // 标签样式
    tagType(val, arrs) {
      if (arrs) {
        const range = arrs.range
        if (val !== undefined) {
          const defaultArr = arrs.info
          const grayArr = arrs.gray
          const primaryArr = arrs.primary
          const successArr = arrs.success
          const warningArr = arrs.warning
          const dangerArr = arrs.danger
          if (this.contains(defaultArr, val, range)) {
            return 'info'
          }
          if (this.contains(grayArr, val, range)) {
            return 'gray'
          }
          if (this.contains(primaryArr, val, range)) {
            return 'primary'
          }
          if (this.contains(successArr, val, range)) {
            return 'success'
          }
          if (this.contains(warningArr, val, range)) {
            return 'warning'
          }
          if (this.contains(dangerArr, val, range)) {
            return 'danger'
          }
        }
      }
      return 'primary'
    },
    // 数组是否包含指定值
    contains(arr, val, range) {
      if (range) {
        if (arr && Array.isArray(arr) && arr.length > 0) {
          if (arr.length >= 2 && arr[0] && arr[1]) {
            return val >= arr[0] && val < arr[1]
          }
        }
      } else {
        return (
          arr &&
          Array.isArray(arr) &&
          arr.length > 0 &&
          arr.findIndex(a => a === val) >= 0
        )
      }
      return false
    }
  }
}
</script>

