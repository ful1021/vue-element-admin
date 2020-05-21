<template>
  <el-dropdown trigger="click">
    <el-button type="primary">
      操作
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" style="min-width: 80px; padding: 5px auto;">
      <div v-for="(item,index) in menu" :key="index" v-has="item.has" @click="item.event()">
        <el-dropdown-item :style="item.itemStyle||itemStyle">{{ item.name }}</el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      itemStyle: 'text-align:center'
    }
  }
}
</script>
