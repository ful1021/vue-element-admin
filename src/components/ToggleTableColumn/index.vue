<template>
  <div>
    <el-tooltip content="显示隐藏列" placement="top">
      <el-button class="pull-right" @click="isShowToggleTableColumn = !isShowToggleTableColumn">
        <i class="el-icon-s-grid" />
      </el-button>
    </el-tooltip>
    <div v-show="isShowToggleTableColumn">
      <el-transfer
        v-model="columnList"
        filterable
        filter-placeholder="输入列名或者标题名称"
        :titles="['所有列', '当前列']"
        :props="{
          key: 'colName',
          label: 'label'
        }"
        :filter-method="columnFilterMethod"
        :data="allColumnList"
      >
        <span slot-scope="{ option }">{{ option.label }} - {{ option.colName }}</span>
      </el-transfer>
      <div style="text-align:center;">
        <el-button type="primary" @click="saveHandler">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allColumnList: {
      type: Array,
      default: () => []
    },
    columnList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShowToggleTableColumn: false
    }
  },
  methods: {
    columnFilterMethod(query, item) {
      const val = query.toLowerCase()
      return (
        item.colName
          .toString()
          .toLowerCase()
          .indexOf(val) > -1 ||
        item.label
          .toString()
          .toLowerCase()
          .indexOf(val) > -1
      )
    },
    saveHandler() {

    }
  }
}
</script>
