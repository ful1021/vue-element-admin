<template>
  <div>
    <el-form :ref="refFormName" :model="fromInput" label-width="100px">
      <el-form-item
        label="表"
        prop="tableName"
        :rules="{required: true, message: '请选择表', trigger: 'blur'}"
      >
        <el-select v-model="fromInput.tableName" filterable clear placeholder="请选择">
          <el-option
            v-for="(item,index) in biz.extendTableNameList"
            :key="index"
            :label="item.text"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        prop="key"
        label="字段名"
        :rules="[{ required: true, message: '请输入字段名', trigger: 'blur' }]"
      >
        <el-input v-model="fromInput.key" />
      </el-form-item>
      <el-form-item
        prop="title"
        label="字段注释"
        :rules="[{ required: true, message: '请输入字段注释', trigger: 'blur' }]"
      >
        <el-input v-model="fromInput.title" />
      </el-form-item>
    </el-form>
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
  key: '',
  title: '',
  tableName: ''
}
export default {
  mixins: [action],
  props: {
    editInput: { type: Object, default: () => defaultInput }
  },
  data() {
    return {
      fromInput: {},
      refFormName: 'dataForm'
    }
  },
  mounted() {
    if (this.isAdd) {
      this.fromInput = Object.assign({}, defaultInput)
    } else {
      this.fromInput = this.editInput
    }
    this.biz.initEnum('ExtendTableName')
  },
  methods: {
    saveHandler() {
      let msg = '确定要修改？'
      if (this.isAdd) {
        msg = '确定要新增？'
      }
      this.validateConfirm(this.refFormName, async() => {
        const input_data = Object.assign({}, this.fromInput)
        if (this.isAdd) {
          await app.extendColumn.create(input_data)
        } else {
          await app.extendColumn.update(input_data)
        }
        this.$notify.success({
          title: '成功',
          message:
            '操作成功'
        })
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
