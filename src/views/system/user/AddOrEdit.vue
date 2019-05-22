<template>
  <div>
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="基本信息" name="first">
        <el-form :ref="refFormName" :model="fromInput" label-width="80px">
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
          <div v-show="fromInput.id==0">
            <el-form-item
              prop="password"
              label="密码"
              auto-complete="off"
              :rules="[{ required: true, message: '请输入密码', trigger: 'blur' },{ min: 6, message: '大于或等于6位', trigger: 'change' }]"
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
      <el-tab-pane label="角色信息" name="second">
        <div class="form-wrap-box">
          <p>请勾选此用户所属角色：</p>
          <el-checkbox-group v-model="fromInput.roleNames">
            <el-checkbox
              v-for="(item,index) in comm.roleList"
              :key="index"
              :label="item.name"
            >{{ item.displayName }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div style="text-align:center;">
      <el-button type="danger" @click="$emit('close')">取消</el-button>
      <el-button type="primary" @click="saveHandler">保存</el-button>
    </div>
  </div>
</template>

<script>
import { app } from '@/api/api'
import confirm from '@/mixins/confirm'
import comm from '@/mixins/comm'
const defaultInput = {
  id: 0,
  userName: '',
  name: '',
  surname: '',
  phoneNumber: '',
  emailAddress: '',
  isActive: true,
  roleNames: [],
  password: ''
}
export default {
  mixins: [confirm],
  props: {
    fromInput: {
      type: Object,
      default: () => defaultInput
    }
  },
  data() {
    return {
      comm,
      activeTab: 'first',
      refFormName: 'dataForm'
    }
  },
  mounted() {
    this.comm.initRoles()
  },
  methods: {
    saveHandler() {
      this.validateConfirm(this.refFormName, () => {
        const input_data = Object.assign({}, this.fromInput)
        input_data.surname = this.fromInput.name
        app.user.create(input_data).then(result => {
          this.$emit('close')
          this.$emit('queryList')
        })
      }, '确定要新增？')
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
