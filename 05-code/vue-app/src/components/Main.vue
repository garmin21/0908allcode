<template>
  <h2 v-if="firstView">请输入搜索内容...</h2>
  <h2 v-else-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">请求失败,错误信息为:{{errorMsg}}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
// 引入Vuex
import { mapState } from 'vuex'
export default {
  name: 'Main',
  computed: {
    ...mapState(['firstView', 'loading', 'errorMsg', 'users'])
  }
}
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
