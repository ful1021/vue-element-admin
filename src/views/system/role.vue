<template>
  <div>
    <el-table
      :key="tableKey"
      v-loading="isShowLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="名称" prop="name" />
      <el-table-column label="描述" prop="description" />
    </el-table>

    <pagination
      :total="pageConfig.total"
      :page.sync="pageConfig.currentPage"
      :limit.sync="filters.maxResultCount"
      :page-sizes="pageConfig.pageSizes"
      @pagination="pageChange"
    />
  </div>
</template>

<script>
import query from '@/mixins/query'
import { app } from '@/api/api'

export default {
  mixins: [query],
  data() {
    return {

    }
  },
  methods: {
    queryList() {
      this.getList(app.role.getAll)
    }
  }
}
</script>

