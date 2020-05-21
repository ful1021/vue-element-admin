<template>
  <el-table-column
    :header-align="headerAlign"
    :align="align"
    :prop="prop"
    :sortable="sortable"
    v-bind="$attrs"
  />
</template>

<script>
import mixins from './mixins'
export default {
  mixins: [mixins],
  props: {
  }
}
</script>

