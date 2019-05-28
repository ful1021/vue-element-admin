<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane label="角色名称" name="first">
        <el-form :ref="refFormName" :model="fromInput" label-width="80px">
          <el-form-item
            prop="name"
            label="显示名称"
            :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]"
          >
            <el-input v-model="fromInput.displayName" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="fromInput.description"
              :autosize="{ minRows: 2, maxRows: 4}"
              type="textarea"
            />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="权限" name="second">
        <el-row>
          <el-col
            v-for="(root, index) in rolesTree"
            :key="'r_'+index"
            :span="4"
            :offset="index > 0 ? 0 : 0"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div slot="header" class="clearfix">
                <span style="line-height: 24px;">
                  <el-checkbox v-model="treeRoots[root.name]">{{ root.displayName }}</el-checkbox>
                </span>
              </div>
              <el-tree
                ref="tree"
                :data="root.children"
                :check-strictly="true"
                :default-checked-keys="grantedPermissionNames"
                default-expand-all
                show-checkbox
                highlight-current
                node-key="name"
                :props="defaultProps"
              />

              <el-tree
                ref="tree"
                :check-strictly="checkStrictly"
                :data="routesData"
                :props="defaultProps"
                show-checkbox
                node-key="path"
                class="permission-tree"
              />
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <div class="foot">
      <el-button type="danger" @click="$emit('close')">取消</el-button>
      <el-button type="primary" @click="saveHandler">保存</el-button>
    </div>
  </div>
</template>

<script>
import { app } from '@/api/api'
import action from '@/mixins/action'
const defaultInput = {
  id: 0,
  name: '',
  displayName: '',
  description: '',
  permissions: []
}
export default {
  mixins: [action],
  props: {
    fromInput: { type: Object, default: () => defaultInput }
  },
  data() {
    return {
      activeTab: 'first',
      refFormName: 'dataForm',

      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false
    }
  },
  mounted() {

  },
  methods: {
    async getAllPermissions() {
      const result = await app.role.getAllPermissions()
      console.log(result)
    },
    async getRoleForEdit(roleId) {
      const result = await app.role.getRoleForEdit({ id: roleId })
      console.log(result)
    },
    saveHandler() {
      let msg = '确定要新增？'
      if (this.fromInput.id > 0) {
        msg = '确定要修改？'
      }
      this.validateConfirm(this.refFormName, async() => {
        const input_data = Object.assign({}, this.fromInput)
        if (input_data.id > 0) {
          await app.role.update(input_data)
        } else {
          await app.role.create(input_data)
        }

        this.$emit('close')
        this.$emit('queryList')
      }, msg)
    }
  }

}
</script>
<style scoped>
.foot {
  text-align: center;
  margin-top: 30px;
}
</style>
