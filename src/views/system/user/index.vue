<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="filters.keyword"
        placeholder="用户名、姓名、邮箱"
        style="width: 300px;"
        class="filter-item"
      />

      <el-select
        v-model="filters.isActive"
        placeholder="是否激活"
        clearable
        style="width: 150px"
        class="filter-item"
      >
        <el-option
          v-for="(item,index) in comm.boolList"
          :key="index"
          :label="item.text"
          :value="item.value"
        />
      </el-select>
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
      <el-button
        v-has:Unlock
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        @click="handleUnlock"
      >解锁</el-button>
      <!-- <el-button
        v-has:Edit
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="preEdit"
      >修改</el-button>-->
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
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <el-button type="primary" size="small" icon="el-icon-s-tools">
              操作
              <i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:150px">
              <span
                v-show="session.userId!=scope.row.id"
                v-has:Impersonate
                @click="impersonate(scope.row.id)"
              >
                <el-dropdown-item>模拟用户登录</el-dropdown-item>
              </span>
              <span v-has:Edit @click="handleEdit(scope.row)">
                <el-dropdown-item>修改</el-dropdown-item>
              </span>
              <span v-has:ResetPassword @click="handleResetPwd(scope.row)">
                <el-dropdown-item>重置密码</el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="用户名" prop="userName" />
      <el-table-column header-align="center" align="center" label="姓名" prop="name" />
      <el-table-column header-align="center" align="center" label="角色" prop="roleDisplayNames">
        <template slot-scope="scope">
          <span>{{ scope.row.roleDisplayNames.join('，') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item,index) in columnList"
        :key="index"
        header-align="center"
        align="center"
        :label="item.label"
      >
        <template slot-scope="scope">{{ scope.row[item.colName] }}</template>
      </el-table-column>
      <el-table-column header-align="center" align="center" label="最后登录时间">
        <template slot-scope="scope">
          <span>{{ scope.row.lastLoginTime | dateFormat('yyyy-MM-dd hh:mm') }}</span>
        </template>
      </el-table-column>
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
          :is-reset-password="addOrEditDialog.isResetPassword"
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
      columnList: [
        {
          label: '手机号',
          colName: 'phoneNumber'
        },
        {
          label: '邮箱',
          colName: 'emailAddress'
        }
      ]
    }
  },
  methods: {
    queryList() {
      this.getList(app.user.getAll)
    },

    handleDownload() {

    },
    handleResetPwd(row) {
      this.handleEdit(row)
      this.addOrEditDialog.isResetPassword = true
    },
    async impersonate(userId) {
      await this.$store.dispatch('user/impersonate', userId)
    },

    handleUnlock() {
      if (this.selectLeastOne()) {
        this.handlerBatch(app.user.unlockUser, '解锁', this.selectRows.map(a => { return { id: a.id } }))
      }
    }
  }
}
</script>

