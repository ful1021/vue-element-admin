<template>
  <div>
    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane label="基本信息" name="first">
        <el-form :ref="refFormName" :model="fromInput" label-width="100px">
          <div v-if="!isResetPassword">
            <el-form-item
              prop="userName"
              label="用户名"
              :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.userName" />
            </el-form-item>
            <el-form-item
              prop="name"
              label="姓名"
              :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.name" />
            </el-form-item>
            <el-form-item
              prop="phoneNumber"
              label="手机号码"
              :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.phoneNumber" />
            </el-form-item>
            <el-form-item
              prop="emailAddress"
              label="电子邮箱"
              :rules="[{ required: true, type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.emailAddress" />
            </el-form-item>

            <el-form-item
              v-for="(item, index) in dynamicColumns"
              :key="index"
              :label="item.title"
              :prop="item.key"
            >
              <el-input v-model="item.value" />
            </el-form-item>
          </div>
          <div v-if="isAdd || isResetPassword">
            <el-form-item
              v-if="isResetPassword"
              prop="adminPassword"
              label="管理员密码"
              auto-complete="off"
              :rules="[{ required: true, message: '请输入管理员密码', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.adminPassword" type="password" />
            </el-form-item>
            <el-form-item
              prop="password"
              label="密码"
              auto-complete="off"
              :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
            >
              <el-input v-model="fromInput.password" type="password" />
            </el-form-item>
            <el-form-item
              prop="passwordRepeat"
              label="确认密码"
              auto-complete="off"
              :rules="[
                { validator: validatePass2, trigger: 'blur' }
              ]"
            >
              <el-input v-model="fromInput.passwordRepeat" type="password" />
            </el-form-item>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane v-if="!isResetPassword" label="角色信息" name="second">
        <p>请勾选此用户所属角色：</p>
        <el-checkbox-group v-model="fromInput.roleNames">
          <el-checkbox
            v-for="(item,index) in biz.roleList"
            :key="index"
            :label="item.normalizedName"
          >{{ item.displayName }}</el-checkbox>
        </el-checkbox-group>
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
import { preExtensionData } from '@/utils/index'
const defaultInput = {
  id: 0,
  userName: '',
  name: '',
  surname: '',
  phoneNumber: '',
  emailAddress: '',
  isActive: true,
  roleNames: [],
  password: '',
  extensionData: {}
}
export default {
  mixins: [action],
  props: {
    isResetPassword: { type: Boolean, default: false },
    editInput: { type: Object, default: () => defaultInput }
  },
  data() {
    return {
      fromInput: {},
      activeTab: 'first',
      refFormName: 'dataForm',
      dynamicColumns: [
        {
          key: 'Test',
          title: '测试',
          value: ''
        },
        {
          key: 'Age',
          title: '年龄',
          value: ''
        }
      ]
    }
  },
  created() {
    console.log(JSON.stringify(this.biz.roleList))
  },
  mounted() {
    if (this.isAdd) {
      this.fromInput = Object.assign({}, defaultInput)
    } else {
      this.fromInput = this.editInput

      this.dynamicColumns.forEach(item => {
        if (this.fromInput.extension.hasOwnProperty(item.key)) {
          item.value = this.fromInput.extension[item.key]
        }
      })
    }
    this.init()
  },
  methods: {
    init() {
      this.biz.initRoles()
    },
    async saveHandler() {
      this.fromInput.extensionData = await preExtensionData(this.dynamicColumns)
      let msg = '确定要新增？'
      if (this.fromInput.id > 0) {
        msg = '确定要修改？'
      }
      this.validateConfirm(this.refFormName, async() => {
        const input_data = Object.assign({}, this.fromInput)
        input_data.surname = this.fromInput.name
        if (this.isAdd) {
          await app.user.create(input_data)
        } else {
          if (this.isResetPassword) {
            await app.user.resetPassword({
              adminPassword: this.fromInput.adminPassword,
              userId: this.fromInput.id,
              newPassword: this.fromInput.password
            })
          } else {
            await app.user.update(input_data)
          }
        }
        this.$notify.success({
          title: '成功',
          message:
            '操作成功'
        })
        this.$emit('close')
        this.$emit('queryList')
      }, msg)
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.fromInput.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
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
