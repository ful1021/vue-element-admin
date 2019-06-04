<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane label="角色名称" name="first">
        <el-form :ref="refFormName" :model="fromInput" label-width="80px">
          <el-form-item
            prop="displayName"
            label="显示名称"
            :rules="[{ required: true, message: '请输入名称', trigger: 'blur' }]"
          >
            <el-input v-model="fromInput.displayName" />
          </el-form-item>
          <el-form-item prop="description" label="描述">
            <el-input
              v-model="fromInput.description"
              :autosize="{ minRows: 2, maxRows: 4}"
              type="textarea"
            />
          </el-form-item>
          <el-form-item prop="isDefault" label="是否默认">
            <el-switch v-model="fromInput.isDefault" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="权限" name="second">
        <el-tree
          ref="tree"
          :data="rolesTree"
          :check-strictly="checkStrictly"
          default-expand-all
          check-on-click-node
          :expand-on-click-node="false"
          show-checkbox
          highlight-current
          node-key="name"
          :props="defaultProps"
        />
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
  displayName: '',
  description: '',
  isDefault: false,
  grantedPermissionNames: []
}
export default {
  mixins: [action],
  props: {
    editInput: { type: Object, default: () => defaultInput }
  },
  data() {
    return {
      activeTab: 'first',
      refFormName: 'dataForm',

      checkStrictly: false,
      fromInput: {},

      // 组织树
      rolesTree: [],
      defaultProps: {
        children: 'children',
        label: 'displayName'
      },
      // 搜索数据列表
      searchList: [],
      cascaderProps: {
        label: 'displayName',
        value: 'name',
        children: 'children'
      },
      selectedOptions: []
    }
  },
  mounted() {
    if (this.isAdd) {
      this.fromInput = Object.assign({}, defaultInput)
    } else {
      this.fromInput = this.editInput
    }
    this.getRoleForEdit(this.fromInput.id)
  },
  methods: {
    async getRoleForEdit(roleId) {
      const result = await app.role.getRoleForEdit({ id: roleId })
      this.generateTreeData(result.permissions)
      this.checkStrictly = true
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(result.grantedPermissionNames)
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
      })
    },
    // 把组件结构的列表数据转换成eleme可以解析的组件树数据
    generateTreeData(rolesData) {
      if (!rolesData || rolesData.length === 0) {
        return
      }
      const _treeData = []
      rolesData.find(function(item, index) {
        if (item.parentName == null) {
          _treeData.push(item)
          return
        }
        for (let i = 0, j = rolesData.length; i < j; i++) {
          if (item.parentName === rolesData[i].name) {
            if (!rolesData[i].children) {
              rolesData[i].children = []
            }
            rolesData[i].children.push(item)
            break
          }
        }
      })
      this.rolesTree = _treeData.slice(0)
      this.searchList = _treeData.slice(0)
      this.searchList.unshift('')
    },
    saveHandler() {
      let msg = '确定要新增？'
      if (this.fromInput.id > 0) {
        msg = '确定要修改？'
      }
      this.validateConfirm(this.refFormName, async() => {
        const input_data = Object.assign({}, this.fromInput)
        input_data.grantedPermissionNames = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
        await app.role.createOrUpdateRole(input_data)
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
