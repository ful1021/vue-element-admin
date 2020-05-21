<template>
  <div>
    <el-upload
      class="drop"
      drag
      :headers="headersObj"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
      :action="uploadAction"
      :show-file-list="false"
      accept=".xlsx"
    >
      <!-- accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" -->

      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <!-- <div slot="tip" class="el-upload__tip">只能上传.xlsx文件，且不超过2M</div> -->
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  props: {
    action: {
      type: String,
      required: true
    },
    onSuccess: Function// eslint-disable-line
  },
  data() {
    return {
      loading: false,
      headersObj: { Authorization: getToken() }
    }
  },
  computed: {
    uploadAction() {
      return this.$tool.getUrl(this.action)
    }
  },
  methods: {
    beforeUpload(file) {
      this.loading = true
    },
    handleSuccess(res, file, fileList) {
      if (this.onSuccess) {
        this.onSuccess(res, file, fileList)
      } else {
        if (res.error) {
          this.$notify.error({
            title: '上传错误',
            message: res.error.message,
            duration: 0
          })
        } else {
          let msg = ''
          if (res.result) {
            msg = res.result.message
          }
          this.$notify.success({
            title: '导入成功',
            message: msg,
            duration: 10 * 1000
          })
        }
      }
      this.loading = false
    },
    handleError() {
      this.loading = false
    }

  }
}
</script>

<style scoped>
.drop {
  /* border: 2px dashed #bbb;
    color: #bbb;
  position: relative;
  border-radius: 5px;
  margin: 0 auto;
        height: 160px;
  line-height: 160px;
    width: 600px;
   */

  font-size: 24px;
  text-align: center;
}
</style>
<style>
.drop .el-upload-dragger {
  border: 2px dashed #bbb;
  width: 700px;
}
</style>
