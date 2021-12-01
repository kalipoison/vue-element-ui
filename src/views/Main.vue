<template>
  <el-container>
    <el-aside width="auto"><commonAside></commonAside></el-aside>
    <el-container >
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
export default {
  name: 'Main',
  components: { CommonAside, CommonHeader }
}
</script>

<style
    CommonAside lang="scss" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
