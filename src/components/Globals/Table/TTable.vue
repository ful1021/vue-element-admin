<template>
  <el-table
    v-loading="loading"
    :data="tdata"
    border
    fit
    highlight-current-row
    style="width: 100%"
    @selection-change="selectionChangeHandle"
    @sort-change="sortChangeHandle"
  >
    <slot />
  </el-table>
</template>

<script>

export default {
  props: {
    tdata: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    selectionChangeHandle(val) {
      this.$emit('selectRows', val)
    },
    sortChangeHandle(sort) {
      let status = ''
      if (sort.order === 'ascending') {
        status = 'asc'
      } else if (sort.order === 'descending') {
        status = 'desc'
      }
      const sorting = `${sort.prop} ${status}`
      this.$emit('update:sorting', sorting)
    }
  }
}
</script>
