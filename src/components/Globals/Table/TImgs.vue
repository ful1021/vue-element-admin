<template>
  <el-table-column :header-align="headerAlign" :align="align" :prop="prop" v-bind="$attrs">
    <template #default="scope">
      <div class="m-flex-container">
        <el-image
          v-if="getOnePic(scope.row)"
          :src="getOnePic(scope.row)"
          :preview-src-list="preview ? picsData(scope.row) : []"
          fit="cover"
          class="m-pic"
        />
        <el-popover v-if="picsData(scope.row).length > 1" trigger="click" @show="previewCount++">
          <div v-if="previewCount > 0" class="m-flex-container">
            <el-image
              v-for="(item, index) in picsData(scope.row)"
              v-show="index !== 0"
              :key="item"
              :src="item"
              :preview-src-list="preview ? [picsData(scope.row)[index]] : []"
              fit="cover"
              class="m-pic"
            />
          </div>
          <div slot="reference" class="m-pic-more">+ {{ picsData(scope.row).length - 1 }}</div>
        </el-popover>
      </div>
    </template>
  </el-table-column>
</template>

<script>
import mixins from './mixins'
export default {
  mixins: [mixins],
  props: {
    preview: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      previewCount: 0,
      datas: []
    }
  },
  methods: {
    getOnePic(row) {
      const pics = row[this.prop]
      var link = ''
      if (typeof pics === 'string' && pics) {
        link = this.$tool.getUrl(pics)
      } else if (pics instanceof Array && pics.length > 0) {
        link = this.$tool.getUrl(pics[0])
      }
      return link
    },
    // 数据处理，把字符串转化为数组
    picsData(row) {
      const pics = row[this.prop]
      var data = []
      if (typeof pics === 'string' && pics) {
        data.push(this.$tool.getUrl(pics))
      } else if (pics instanceof Array && pics.length > 0) {
        pics.forEach(pic => {
          data.push(this.$tool.getUrl(pic))
        })
      }
      return data
    }
  }
}
</script>
<style>
.el-icon-circle-close {
  color: red;
}
</style>
<style lang="scss" scoped>
.m-flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.m-pic,
.m-pic-more {
  width: 80px;
  height: 80px;
  &.m-pic {
    border: 1px solid #eaeaea;
  }
  &.m-pic-more {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eaeaea;
    color: #c0c4cc;
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
  }
  &.medium {
    width: 70px;
    height: 70px;
  }
  &.small {
    width: 60px;
    height: 60px;
  }
  &.mini {
    width: 50px;
    height: 50px;
  }
}
</style>
