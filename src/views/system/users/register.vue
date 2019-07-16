<template>
  <div>
    <el-form :ref="refFormName" :model="fromInput" label-width="100px">
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
      <el-form-item>
        <el-button type="primary" @click="saveHandler">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { app } from '@/api/api'
import biz from '@/utils/biz'
import { validateConfirm, preExtensionData } from '@/utils/index'
export default {
  data() {
    return {
      biz: biz,
      refFormName: 'dataForm',
      fromInput: {},
      dynamicColumns: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const extColumns = await app.extendColumn.getAll({
        tableNames: [1]
      })
      this.dynamicColumns = extColumns.items
    },
    async saveHandler() {
      this.fromInput.extensionData = await preExtensionData(this.dynamicColumns)
      validateConfirm(this, this.refFormName, async() => {
        const input_data = Object.assign({}, this.fromInput)
        input_data.surname = this.fromInput.name
        await app.account.register(input_data)
        this.$notify.success({
          title: '成功',
          message:
            '注册成功'
        })
      }, '确定要注册？')
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
