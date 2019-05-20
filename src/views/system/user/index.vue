<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="filters.title" placeholder="标题" class="filter-item" />
    </div>
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleAdd"
      >新增</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="preEdit"
      >修改</el-button>
      <el-button
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >条件导出</el-button>
      <!-- <toggle-table-column :column-list="columnList" :all-column-list="columnList" /> -->
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
      <el-table-column header-align="center" align="center" label="用户名" prop="userName" />

      <el-table-column
        v-for="(item,index) in columnList"
        :key="index"
        header-align="center"
        align="center"
        :label="item.label"
      >
        <template slot-scope="scope">{{ scope.row[item.colName] }}</template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="创建时间" prop="creationTime">
        <template slot-scope="scope">
          <span>{{ new Date(scope.row.creationTime) | formatTime('{y}-{m}-{d} {h}:{i}') }}</span>
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

    <el-dialog :title="addOrEditDialog.title" :visible.sync="addOrEditDialog.isShow" size="large">
      <AddOrEdit
        :edit-id="addOrEditDialog.editId"
        @queryList="queryList"
        @close="addOrEditDialog.isShow=false"
      />
    </el-dialog>
  </div>
</template>

<script>
import query from '@/mixins/QueryList'
import { app } from '@/api/api'
import AddOrEdit from './AddOrEdit'

export default {
  components: {
    AddOrEdit
  },
  mixins: [query],
  data() {
    return {
      filters: {
        // maxResultCount: 1
      },
      columnList: [
        {
          label: '姓名',
          colName: 'name'
        },
        {
          label: '邮箱',
          colName: 'emailAddress'
        },
        {
          label: '角色',
          colName: 'roleNames'
        },
        {
          label: '最后登录时间',
          colName: 'lastLoginTime'
        },
        {
          label: '创建时间',
          colName: 'creationTime'
        }
      ],
      addOrEditDialog: {
        editId: 0,
        title: '',
        isShow: false
      }
    }
  },
  methods: {
    queryList() {
      this.getList(app.user.getAll)
    },
    handleAdd() {
      this.addOrEditDialog.title = '新增'
      this.addOrEditDialog.isShow = true
    },
    handleEdit() {
      this.addOrEditDialog.editId = this.selectRows[0].id
      this.addOrEditDialog.title = '修改'
      this.addOrEditDialog.isShow = true
    },
    handleDownload() {

    }
  }
}
</script>

