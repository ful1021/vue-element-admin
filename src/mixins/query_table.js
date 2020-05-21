export default {
  data() {
    return {

      listLoading: true,
      tdata: [],
      total: 0,

      tableRef: 'tableRef',
      filters: {
        maxResultCount: 10, // 最大结果集（等同每页记录数）
        skipCount: 0,
        sorting: 'id desc' // 默认按时间降序排序
      },

      selectRows: []
    }
  },
  watch: {
    filters: {
      deep: true,
      handler(newValue, oldValue) {
        // console.log(JSON.stringify(newValue))
        this.query()
      }
    }
  },
  methods: {
    query() {

    }
  }
}
