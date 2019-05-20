<template>
  <div>
    <el-form :model="fromInput" label-width="80px">
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
      <div v-show="editId==0">
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
      <div style="text-align:center;">
        <el-button type="danger" @click="$emit('close')">取消</el-button>
        <el-button type="primary" @click="saveHandler">保存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    editId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      fromInput: {}
    }
  },
  methods: {
    saveHandler() {

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
