<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="filters.keyword"
        placeholder="名称、描述"
        style="width: 300px;"
        class="filter-item"
      />
    </div>
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleAdd"
      >新增</el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="isShowLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @selection-change="handleSelectAll"
    >
      <el-table-column type="selection" align="center" width="50" />
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <el-button type="primary" size="small" icon="el-icon-s-tools">
              操作
              <i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:150px">
              <span @click="handleEdit(scope.row)">
                <el-dropdown-item>修改</el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="名称" prop="name" />
      <el-table-column header-align="center" align="center" label="描述" prop="description" />
    </el-table>

    <pagination
      :total="pageConfig.total"
      :page.sync="pageConfig.currentPage"
      :limit.sync="filters.maxResultCount"
      :page-sizes="pageConfig.pageSizes"
      @pagination="pageChange"
    />

    <el-dialog :title="addOrEditDialog.title" :visible.sync="addOrEditDialog.isShow">
      <add-or-edit
        :from-input="addOrEditDialog.input"
        @queryList="queryList"
        @close="addOrEditDialog.isShow=false"
      />
    </el-dialog>
  </div>
</template>

<script>
import query from '@/mixins/query'
import { app } from '@/api/api'
import AddOrEdit from './AddOrEdit'

export default {
  components: {
    AddOrEdit
  },
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

