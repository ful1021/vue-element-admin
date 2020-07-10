<template>
  <div class="dashboard-editor-container">
    <div>
      直接访问具体的微服务：
      <hr />用户角色管理服务 http://localhost:5000
      <br />/api/app/sample/authorized
      <br />支付中心服务 http://localhost:44323
      <br />/api/PaySystem/sample/authorized
      <hr />访问网关 https://localhost:44318 或者 http://localhost:53639
      <br />支付中心服务
      <br />/Payment/PaySystem/sample/authorized
      <br />用户角色管理服务
      <br />/auth/app/sample/authorized
      <hr />
    </div>
    <div>
      baseURL:
      <el-input v-model="baseUrl" placeholder="baseUrl"></el-input>url:
      <el-input v-model="url" placeholder="url"></el-input>method:
      <el-input v-model="method" placeholder="method"></el-input>

      <el-button type="primary" @click="test">test</el-button>
    </div>
    <div>{{ result }}</div>
    <div class="clearfix">
      <pan-thumb :image="avatar" style="float: left">
        Your roles:
        <span v-for="item in roles" :key="item" class="pan-info-roles">{{ item }}</span>
      </pan-thumb>
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">Editor's Dashboard</span>
      </div>
    </div>
    <div>
      <img :src="emptyGif" class="emptyGif" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import request from '@/utils/request'

export default {
  name: 'DashboardEditor',
  components: { PanThumb },
  data() {
    return {
      baseUrl: 'http://localhost:44323',
      url: '/api/PaySystem/sample/authorized',
      method: 'get',
      result: '',
      emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  methods: {
    async test() {
      const result = await request(Object.assign({
        url: this.url,
        method: this.method
      }, {
        baseURL: this.baseUrl
      }))
      console.log(result)
      this.result = result
    }
  }
}
</script>

<style lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
