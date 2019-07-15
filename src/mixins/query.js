import Pagination from '@/components/Pagination'
import biz from '@/utils/biz'
export default {
  components: { Pagination },
  data() {
    return {
      auth: abp.auth,
      session: abp.session,
      biz: biz,
      tableKey: 0,
      isShowLoading: true,
      filters: {
        filter: '', // 默认关键词搜索名称
        maxResultCount: 20, // 最大结果集（等同每页记录数）
        skipCount: 0,
        sorting: 'creationTime desc' // 默认按时间降序排序
      }, // 搜索信息字段
      pageConfig: {
        pageSizes: [10, 25, 50, 100, 500],
        total: 0, // 总记录数
        currentPage: 1 // 当前页记录数
      }, // 分页信息
      tableData: [], // 数据列表
      selectRows: [], // 用户选择的列表数据
      queryListHandler: null,

      addOrEditDialog: {
        title: '',
        input: {},
        isShow: false,
        isAdd: true
      }
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    filters: {
      // immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.queryList()
      }
    }
  },
  methods: {
    // 当前页面初始化
    init() {
      this.queryList()
    },
    // 数据列表查询，业务放要覆盖的
    queryList() {
      if (this.queryListHandler != null) {
        this.getList(this.queryListHandler)
      }
    },
    async getList(queryListHandler, extFilters, callback) {
      const input_data = Object.assign({}, this.filters, extFilters || {})
      const result = await queryListHandler(input_data)

      this.isShowLoading = false
      this.tableData = result.items
      this.pageConfig.total = result.totalCount
      // this.refreshSelectRows()

      if (callback && typeof callback === 'function') {
        callback(result)
      }
    },
    pageChange(val) {
      this.filters.skipCount = val.limit * (val.page - 1)
    },
    // 数据列表全选事件
    handleSelectAll(selection) {
      this.selectRows = selection
    },

    // 列表数据只能选择一个验证
    selectOne() {
      if (this.selectRows.length !== 1) {
        this.$message.warning({
          message: '请选择且只能选择一个需要操作的列表信息'
        })
        return false
      }
      return true
    },
    // 列表数据至少选择一个验证
    selectLeastOne() {
      if (this.selectRows.length < 1) {
        this.$message.warning({
          message: '至少选择一个需要操作的列表信息'
        })
        return false
      }
      return true
    },

    // 编辑操作预处理
    preEdit() {
      if (this.selectOne()) {
        this.handleEdit(this.selectRows[0])
      }
    },
    handleAdd() {
      this.addOrEditDialog.title = '新增'
      this.addOrEditDialog.isShow = true
      this.addOrEditDialog.isAdd = true
    },
    handleEdit(row) {
      this.addOrEditDialog.input = row
      this.addOrEditDialog.title = '修改'
      this.addOrEditDialog.isShow = true
      this.addOrEditDialog.isAdd = false
    },

    handleDelete(handerAction, handerRows) {
      if (this.selectLeastOne()) {
        this.handlerBatch(
          handerAction,
          '删除',
          handerRows ||
            this.selectRows.map(a => {
              return { id: a.id }
            })
        )
      }
    },

    /**
     * 批量操作
     * @param {Function} handerAction 单行操作的Promise
     * @param {String} handlerName 操作的名称,可以不传默认为"操作"
     * @param {handerRows} handerRows 批量操作的列表信息,可以不传,默认为"this.selectRows"当前选中列
     * @param {Function} handerSuccessAction 批量操作成功后的回调函数,可以不传默认为"this.queryList"
     **/
    handlerBatch(handerAction, handlerName, handerRows, handerSuccessAction) {
      if (typeof handerRows === 'undefined') {
        handerRows = this.selectRows
      }
      if (!handerSuccessAction) {
        handerSuccessAction = this.queryList
      }
      handlerName = handlerName || '操作'
      if (!handerRows || handerRows.length === 0) {
        this.$message.warning({
          message: '请选择需要' + handlerName + '的列表信息'
        })
        return
      }
      this.$confirm('确定要' + handlerName + '当前列表信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          Promise.all(
            handerRows.map(function(item) {
              return handerAction(item)
                .then(result => {
                  if (result && result.data) {
                    return result.data
                  } else if (result) {
                    return result
                  } else {
                    return {
                      success: true
                    }
                  }
                })
                .catch(error => {
                  // 自己把异常吃掉,返回到数据提示
                  return error.response.data
                })
            })
          ).then(results => {
            if (results && results.length) {
              results.forEach((item, index) => {
                if (item.success !== false) {
                  this.$notify.success({
                    title: '成功',
                    message:
                      (handerRows[index].name || '') + handlerName + '成功'
                  })
                } else {
                  this.$notify.error({
                    title: '错误',
                    message:
                      (handerRows[index].name || '') + item.error.message,
                    duration: 0
                  })
                }
              })
            } else {
              this.$message.success({
                message: handlerName + '成功'
              })
            }
            handerSuccessAction()
          })
        })
        .catch(() => {})
    }
  }
}
