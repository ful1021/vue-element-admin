import Pagination from '@/components/Pagination'
import ToggleTableColumn from '@/components/ToggleTableColumn'
export default {
  components: { Pagination, ToggleTableColumn },
  data() {
    return {
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
      queryListHandler: null
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
    // 数据列表全选事件
    handleSelectAll(selection) {
      this.selectRows = selection
    },
    handleSelectRow(selection, row) {
      this.selectRows = selection
    },

    // 列表数据只能选择一个验证
    selectOneValidate() {
      if (this.selectRows.length !== 1) {
        this.$message({
          message: '请选择一个且只能选择一个需要操作的列表信息',
          type: 'warning'
        })
        return false
      }
      return true
    },
    // 列表数据至少选择一个验证
    selectLeastOneValidate() {
      if (this.selectRows.length < 1) {
        this.$message({
          message: '至少选择一个需要操作的列表信息',
          type: 'warning'
        })
        return false
      }
      return true
    },

    // 编辑操作预处理
    preEdit(getHandler) {
      if (this.selectOneValidate()) {
        this.handleEdit(getHandler)
      }
    },
    handleEdit(getHandler) {},

    // 重新验证当前选中的列表是否存在与当前的列表数据中
    refreshSelectRows() {
      if (this.selectRows.length === 0) {
        return
      }
      this.$nextTick(() => {
        const _selectRows = []
        this.$refs.listTable.clearSelection()
        this.tableData.forEach(item => {
          const row = this.selectRows.find(rowItem => rowItem.id === item.id)
          if (row) {
            _selectRows.push(item)
            this.$refs.listTable.toggleRowSelection(item, true)
          }
        })
        this.selectRows = _selectRows
      })
    },
    pageChange(val) {
      this.filters.skipCount = val.limit * (val.page - 1)
    }
  }
}
