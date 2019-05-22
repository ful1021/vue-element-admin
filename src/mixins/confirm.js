export default {
  methods: {
    confirmHandler(handerAction, handlerName) {
      handlerName = handlerName || '确定要操作吗？'
      this.$confirm(handlerName, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(handerAction)
        .catch(() => {})
    },

    validateConfirm(refsName, handerAction, handlerName) {
      this.$refs[refsName].validate(valid => {
        if (valid) {
          this.confirmHandler(handerAction, handlerName)
        }
      })
    }
  }
}
