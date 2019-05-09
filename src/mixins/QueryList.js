import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
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
    getList(queryListHandler, extFilters, callback) {
      const input_data = Object.assign({}, this.filters, extFilters || {})

      return queryListHandler(input_data).then(result => {
        this.isShowLoading = false
        this.tableData = result.items
        this.pageConfig.total = result.totalCount
        // this.refreshSelectRows()

        if (callback && typeof callback === 'function') {
          callback()
        }
      })
    },
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
