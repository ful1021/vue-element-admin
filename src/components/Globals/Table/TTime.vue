<template>
  <el-table-column
    :prop="prop"
    :sortable="sortable"
    :header-align="headerAlign"
    :align="align"
    :width="width"
    v-bind="$attrs"
  >
    <template #default="scope">{{ handleVal(scope.row) }}</template>
  </el-table-column>
</template>

<script>
import mixins from './mixins'
export default {
  mixins: [mixins],
  props: {
    width: {
      type: String,
      default: '130px'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    }
  },
  methods: {
    handleVal(row) {
      const val = row[this.prop]
      if (val && this.format) {
        return this.$tool.dateFormat(new Date(val), this.format)
      }
      return val
    }
  }
}
</script>

