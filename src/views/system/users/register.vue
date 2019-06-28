<template>
  <div>
    <el-form ref="refFormName" :model="fromInput" label-width="100px">
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
    </el-form>
  </div>
</template>

<script>
import { app } from '@/api/api'
import action from '@/mixins/action'
export default {
  mixins: [action],
  data() {
    return {
      fromInput: {},
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
  methods: {
    saveHandler() {
      const extensionData = {}
      this.dynamicColumns.forEach(item => {
        extensionData[item.key] = item.value
      })
      this.fromInput.extensionData = JSON.stringify(extensionData)
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

<style lang="scss" scoped>
</style>
