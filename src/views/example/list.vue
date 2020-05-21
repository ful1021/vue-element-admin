<template>
  <div class="app-container">
    <t-table :tdata="tdata" :sorting.sync="filters.sorting" @selectRows="selectRows=$event">
      <el-table-column type="selection" />
      <el-table-column label="操作" width="100px" align="center" header-align="center">
        <template #default="scope">
          <el-button type="text" @click="addOrEditLayer.editOpen(scope.row)">修改</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
      <t-tag
        label="类型"
        prop="type"
        :filter="$biz.BookTypeList"
        :types="$biz.BookTypeTags"
        width="110"
      />
      <t-time label="创建时间" prop="creationTime" />
    </t-table>

    <t-paged :total="total" :skip.sync="filters.skipCount" :limit.sync="filters.maxResultCount" />
  </div>
</template>

<script>

import query_table from '@/mixins/query_table'
export default {
  mixins: [query_table],
  data() {
    return {
      addOrEditLayer: {
        editOpen() {

        }
      }
    }
  },
  created() {
    this.query()
  },
  methods: {
    async query() {
      this.listLoading = true

      const input = Object.assign({}, this.filters)

      const result = await this.$api.app.bookApp.getList(input)
      this.total = result.totalCount
      this.tdata = result.items
      this.listLoading = false
    }
  }
}
</script>

