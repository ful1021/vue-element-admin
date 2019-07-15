<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="filters.keyword"
        placeholder="用户名、姓名、邮箱"
        style="width: 300px;"
        class="filter-item"
      />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="queryList">搜索</el-button>
    </div>
    <div class="filter-container">
      <el-button
        v-has:Create
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
              <span v-has:Edit @click="handleEdit(scope.row)">
                <el-dropdown-item>修改</el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="表名" prop="tableName">
        <template slot-scope="scope">
          <span>{{ scope.row.tableName | enumValue(biz.extendTableNameList) }}</span>
        </template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="字段名" prop="key" />
      <el-table-column header-align="center" align="center" label="字段注释" prop="title" />
      <el-table-column header-align="center" align="center" label="创建时间" prop="creationTime">
        <template slot-scope="scope">
          <span>{{ scope.row.creationTime | dateFormat('yyyy-MM-dd hh:mm') }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :total="pageConfig.total"
      :page.sync="pageConfig.currentPage"
      :limit.sync="filters.maxResultCount"
      :page-sizes="pageConfig.pageSizes"
      @pagination="pageChange"
    />

    <div v-if="addOrEditDialog.isShow">
      <el-dialog :title="addOrEditDialog.title" :visible.sync="addOrEditDialog.isShow">
        <add-or-edit
          :edit-input="addOrEditDialog.input"
          :is-add="addOrEditDialog.isAdd"
          @queryList="queryList"
          @close="addOrEditDialog.isShow=false"
        />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import query from '@/mixins/query'
import { app } from '@/api/api'
import AddOrEdit from './AddOrEdit'

export default {
  components: { AddOrEdit },
  mixins: [query],
  data() {
    return {

    }
  },
  methods: {
    init() {
      this.biz.initEnum('ExtendTableName')
      this.queryList()
    },
    queryList() {
      this.getList(app.extendColumn.getAll)
    }
  }
}
</script>

