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
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-dropdown>
            <el-button type="primary" size="small" icon="el-icon-s-tools">
              操作
              <i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown" style="width:150px">
              <span v-show="session.userId!=scope.row.id" @click="impersonate(scope.row.id)">
                <el-dropdown-item>使用这个用户登录</el-dropdown-item>
              </span>
              <span @click="editHandle(scope.row)">
                <el-dropdown-item>修改</el-dropdown-item>
              </span>
              <span @click="lock(scope.row.id)">
                <el-dropdown-item>锁定</el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
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
          <span>{{ new Date(scope.row.creationTime) | formatTime('{y}-{m}-{d}') }}</span>
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
import { mapGetters } from 'vuex'
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
      filters: {
        // maxResultCount: 1
      },
      columnList: [
        {
          label: '姓名',
          colName: 'name'
        },
        {
          label: '角色',
          colName: 'roleNames'
        },
        {
          label: '手机号',
          colName: 'phoneNumber'
        },
        {
          label: '邮箱',
          colName: 'emailAddress'
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
        title: '',
        input: {},
        isShow: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'session'
    ])
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
      this.editHandle(this.selectRows[0])
    },
    editHandle(row) {
      this.addOrEditDialog.input = row
      this.addOrEditDialog.title = '修改'
      this.addOrEditDialog.isShow = true
    },
    lock(userId) {

    },
    handleDownload() {

    },

    async impersonate(userId) {
      const input = {
        userId: userId,
        tenantId: this.session.tenantId
      }
      const result = await app.account.impersonate(input)

      let targetUrl = this.comm.rootUrl + '#?impersonationToken=' + result.impersonationToken
      if (input.tenantId) {
        targetUrl = targetUrl + '&tenantId=' + input.tenantId
      }
      console.log(targetUrl)
      // location.href = targetUrl
    }
  }
}
</script>

